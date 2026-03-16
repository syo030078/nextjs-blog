const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/node_modules_old/', '<rootDir>/.next/'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules_old/'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules_old/'],
}

module.exports = createJestConfig(config)
