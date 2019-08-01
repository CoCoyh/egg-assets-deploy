'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513765449219_5858';

  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.assets = {
    publicPath: '/public',
    url: 'http://192.168.2.2', // 部署centos机器地址，示例地址，不可用
    devServer: {
      autoPort: true,
      command: 'umi dev --port={port}',
      env: {
        APP_ROOT: path.join(__dirname, '../app/web'),
        BROWSER: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:{port}',
      },
      debug: true,
    },
  };

  config.security = {
    csrf: false,
  };

  return config;
};
