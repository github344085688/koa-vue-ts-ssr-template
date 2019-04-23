'use strict'
const path = require('path')
const baseURL = 'http://localhost:3000'
module.exports = {
  public: {
    assetsSubDirectory: './'
  },
  client: {
    serverRunPort: 4000,
    assetsSubDirectory: './',
    cssSourceMap: false,
    productionSourceMap: true
  },

  server: {
    serverRunPort: 8000,
    assetsSubDirectory: './',
    productionSourceMap: true
  }
}
