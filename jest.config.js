/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

/**
 * 
 * @see https://jestjs.io/docs/configuration
 * @see https://orlandobayo.com/blog/monorepo-testing-using-jest/
 */
const packageName = 'ui';
const packageJson = require('./package.json');

module.exports = {
  rootDir: './',
  testEnvironment: 'node',
  // name: packageJson.name,
  displayName: packageJson.name,
  preset: 'ts-jest',
  testMatch: ["**/?(*.)+(test).(dom|snap|unit).{js,jsx,ts,tsx}"],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      "tsconfig": `<rootDir>/tsconfig.json`,
      babelConfig: {
        plugins: ["@vanilla-extract/babel-plugin"]
      }
    }
  },
  /**
   * Setup
   */
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  /**
   * Coverage
   */
  coveragePathIgnorePatterns: ["/node_modules/", "/lib/"],
};