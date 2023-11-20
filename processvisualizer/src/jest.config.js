module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
      'd3': '<rootDir>/__mocks__/d3Mock.js',
    },
  };
  