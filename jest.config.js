/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  coverageReporters:["lcov"],
  coverageDirectory:"./coverage"
};