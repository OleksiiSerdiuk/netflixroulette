module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@styles/(.*)': '<rootDir>/src/global-styles/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '@root/(.*)': '<rootDir>/src/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
};
