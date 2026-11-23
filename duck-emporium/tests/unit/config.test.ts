import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const loader = pathToFileURL(require.resolve("tsx")).href;
const configUrl = new URL("../../src/config.ts", import.meta.url).href;

describe("environment configuration", () => {
  let dir: string;

  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), "duck-config-"));
  });

  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
  });

  function readConfig(overrides: NodeJS.ProcessEnv = {}) {
    const env = { ...process.env };
    delete env.ADMIN_SECRET;
    delete env.PORT;
    delete env.DATA_FILE;
    return spawnSync(
      process.execPath,
      [
        "--import",
        loader,
        "--input-type=module",
        "--eval",
        `import { config } from ${JSON.stringify(configUrl)}; console.log(JSON.stringify(config));`,
      ],
      { cwd: dir, env: { ...env, ...overrides }, encoding: "utf8", timeout: 10000 }
    );
  }

  it("loads .env before validating required configuration", () => {
    writeFileSync(join(dir, ".env"), "ADMIN_SECRET=file-secret\nPORT=3456\n");
    const result = readConfig();
    expect(result.status, result.stderr).toBe(0);
    expect(JSON.parse(result.stdout)).toMatchObject({
      adminSecret: "file-secret",
      port: 3456,
    });
  });

  it("keeps environment variables authoritative over .env", () => {
    writeFileSync(join(dir, ".env"), "ADMIN_SECRET=file-secret\n");
    const result = readConfig({ ADMIN_SECRET: "environment-secret" });
    expect(result.status, result.stderr).toBe(0);
    expect(JSON.parse(result.stdout).adminSecret).toBe("environment-secret");
  });

  it("allows a missing .env when the environment supplies required values", () => {
    const result = readConfig({ ADMIN_SECRET: "environment-secret" });
    expect(result.status, result.stderr).toBe(0);
  });

  it("still rejects an empty admin secret loaded from .env", () => {
    writeFileSync(join(dir, ".env"), "ADMIN_SECRET=\n");
    const result = readConfig();
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("ADMIN_SECRET must be a non-empty string");
  });
});
