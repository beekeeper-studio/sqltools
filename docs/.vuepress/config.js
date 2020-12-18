
const path = require('path');
const webpack = require('webpack');
const projectRoot = process.cwd();
const alias = path.resolve(projectRoot, 'src');

module.exports = {
  dest: 'vuepress',
  serviceWorker: true,
  themeConfig: {
    sidebar: [
      '/',
      '/page1',
      '/page2',
      [
        '/page3',
        'Custom link page'
      ]
    ]
  },
  title: 'SqlTools',
  base: '/',
  configureWebpack(config) {
    // Solely to speed up Vuepress, reenable if you need to debug your setup
    config.devtool = false;
    // Match standard Vue CLI aliasing
    config.resolve.alias['@'] = alias;
    config.externals = {
      // Possible drivers for knex - we'll ignore them
      'sqlite3': 'sqlite3',
      'mariasql': 'mariasql',
      'mssql': 'mssql',
      'mysql': 'mysql',
      'mysql2': 'mysql2',
      'oracle': 'oracle',
      'strong-oracle': 'strong-oracle',
      'oracledb': 'oracledb',
      'pg': 'pg',
      'pg-query-stream': 'pg-query-stream'
    },
    config.plugins = [
      new webpack.NormalModuleReplacementPlugin(/m[sy]sql2?|oracle(db)?|sqlite3/, "node-noop"),
    ]

  },
  plugins: [
    ['vuepress-plugin-typescript', {
        tsLoaderOptions: {
            // Vuepress compilation is ridiculously slow without this, type checking belongs in development not documentation anyway
            transpileOnly: true,
            compilerOptions: {
                // Vuepress needs an older target (as opposed to esnext) to correctly transpile optional chaining and nullish coalescing
                'target': 'ES2019',
            },
        },
    }],
  ]
}