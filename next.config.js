// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
// const withOffline = require('next-offline')
module.exports = {
  async exportPathMap() {
    return {
      '/about': { page: '/about' },
      '/embed(.*)': { page: '/embed' },
      '/index': { page: '/index' },
      '/': { page: '/' }
    }
  }
}
