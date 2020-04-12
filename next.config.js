const path = require('path');

module.exports = (phase, { defaultConfig }) => {
  return {
    webpack(config) {
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
      return config;
    }
  }
}
