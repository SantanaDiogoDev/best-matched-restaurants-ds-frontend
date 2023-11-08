module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

module.exports = {
  transformIgnorePatterns: ["/node_modules/(?!axios)"],
 };