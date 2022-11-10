const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@axios': path.join(path.resolve(__dirname, './src/axios')),
      '@containers': path.join(path.resolve(__dirname, './src/containers')),
      '@assets': path.join(path.resolve(__dirname, './src/assets')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@utils': path.join(path.resolve(__dirname, './src/utils')),
      '@hooks': path.join(path.resolve(__dirname, './src/hooks')),
      '@i18n': path.join(path.resolve(__dirname, './src/i18n')),
    },
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.join(
        path.resolve(__dirname, './dist'),
      );
      return webpackConfig; // Important: return the modified config
    },
  },
};
