const webpack = require('webpack');

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    // externals: { knex: 'commonjs knex' },
    externals: {
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
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/m[sy]sql2?|oracle(db)?|sqlite3/, "node-noop"),
    ]
  }
}