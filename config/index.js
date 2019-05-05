'use strict'
const path = require('path')
const baseURL = 'http://localhost:3000'
module.exports = {
  public: {
    assetsSubDirectory: './'
  },
  api: {
    serverRunPort: baseURL,
    timeout: 3000
  },
  client: {
    serverRunPort: 4000,
    assetsSubDirectory: './',
    cssSourceMap: false,
    productionSourceMap: true
  },

  server: {
    serverRunPort: 7800,
    assetsSubDirectory: './',
    productionSourceMap: true
  }
}
