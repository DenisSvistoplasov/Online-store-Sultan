/** @type {import('ts-jest').JestConfigWithTsJest} */
const path = require('path');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  moduleNameMapper: {
    '\.(css|less|sass|scss|png|svg|jpg|jpeg|webp|gif)$': path.resolve(__dirname, './tests/stubs/stub.js')
  }
};