const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      app: path.resolve(__dirname, 'src', 'app'),
      components: path.resolve(__dirname, 'src', 'components'),
      hooks: path.resolve(__dirname, 'src', 'hooks'),
    },
  },
};
