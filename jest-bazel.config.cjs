/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "ts"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  setupFiles: ["<rootDir>/jest-setup.mjs"],
  testMatch: ["**/*.spec.js"],
};
