const path = require('path');

module.exports = (phase, { defaultConfig }) => {
  return {
    webpack(config) {
      // alias
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');

      // asset configs for semantic-ui-react
      config.module.rules.push({
        test: /\.(png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: '/_next/static/',
            outputPath: 'static/',
            name: '[name].[ext]',
          },
        },
      })

      return config;
    }
  }
}
