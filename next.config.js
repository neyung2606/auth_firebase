module.exports = {
  trailingSlash: true,
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/page': { page: '/page' },
  //     '/page-two': { page: '/page-two' }
  //   }
  // },
  async redirects () {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true
      }
    ]
  }
}
