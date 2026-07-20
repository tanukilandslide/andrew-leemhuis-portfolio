const path = require(`path`);

module.exports = {
  publicPath: { process.env.NODE_ENV === 'production' ? '/public/' : '/' },
    configureWebpack: {
        resolve: {
            symlinks: false,
            alias: {
                vue: path.resolve(`./node_modules/vue`)
            }
        }
    }
};
