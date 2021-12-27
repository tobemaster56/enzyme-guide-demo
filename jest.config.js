// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  setupFiles: ['<rootDir>/tests/setup.js'],
  testEnvironment: 'jsdom', // 不加的话， enzyme mount 报错
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};

module.exports = config;
