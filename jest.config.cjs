const fs = require("node:fs");

const swcConfig = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, "utf-8"));

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        ...swcConfig,
        /* custom configuration in Jest */
        jsc: {
          ...(swcConfig.jsc ?? {}),
          experimental: {
            ...(swcConfig.jsc?.experimental ?? {}),
            plugins: [
              ...(swcConfig.jsc?.experimental?.plugins ?? []),
              [
                "@swc/plugin-transform-imports",
                {
                  "^(.*?)(\\.js)$": {
                    skipDefaultConversion: true,
                    // remove js suffix from local imports:
                    transform: "{{matches.[1]}}",
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  setupFiles: ["<rootDir>/jest-setup.mjs"],
  testMatch: ["**/*.spec.js", "**/*.spec.ts"],
  resetMocks: true,
  maxWorkers: 1,
  logHeapUsage: true,
  forceExit: true,
};
