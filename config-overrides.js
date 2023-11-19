module.exports = function override(config, env) {
    // Webpackの設定をカスタマイズ
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      timers: require.resolve('timers-browserify'),
      buffer: require.resolve('buffer')
    };
  
    // カスタマイズした設定を返す
    return config;
  };
  