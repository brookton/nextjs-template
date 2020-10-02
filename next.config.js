const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})

// Redirects
  // module.exports = {
    // Uncomment the line below to enable basePath, pages and
    // redirects will then have a path prefix (`/app` in this case)
    //
    // basePath: '/app',

  //   async redirects() {
  //     return [
  //       {
  //         source: '/team',
  //         destination: '/about',
  //         permanent: false,
  //       },
  //       // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
  //       {
  //         source: '/old-blog/:slug',
  //         destination: '/news/:slug',
  //         permanent: false,
  //       },
  //       // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
  //       {
  //         source: '/blog/:slug*',
  //         destination: '/news/:slug*',
  //         permanent: false,
  //       },
  //       // Regex Path Matching - The regex below will match `/post/123` but not `/post/abc`
  //       {
  //         source: '/post/:slug*',
  //         destination: '/news/:slug*',
  //         permanent: false,
  //       },
  //     ]
  //   },
  // }

  // rewrites
    // module.exports = {
    //   async rewrites() {
    //     return [
    //       {
    //         source: '/team',
    //         destination: '/about',
    //       },
    //       {
    //         source: '/about-us',
    //         destination: '/about',
    //       },
    //       // Path Matching - will match `/post/a` but not `/post/a/b`
    //       {
    //         source: '/post/:slug',
    //         destination: '/news/:slug',
    //       },
    //       // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
    //       {
    //         source: '/blog/:slug*',
    //         destination: '/news/:slug*',
    //       },
    //       // Rewriting to an external URL
    //       {
    //         source: '/docs/:slug',
    //         destination: 'http://example.com/docs/:slug',
    //       },
    //     ]
    //   },
    // }

    // sitemap 
      // module.exports = {
      //   webpack: (config, { isServer }) => {
      //     if (isServer) {
      //       require('./scripts/generate-sitemap')
      //     }
      
      //     return config
      //   },
      // }