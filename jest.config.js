/* eslint-env node */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  cacheDirectory: '<rootDir>/tmp/test/cache',
  coverageDirectory: '<rootDir>/build/test/coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: 'ts-jest',
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
};
