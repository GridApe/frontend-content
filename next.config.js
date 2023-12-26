/** @type {import('next').NextConfig} */

const nextConfig = { output: 'export', };

// module.exports = nextConfig

module.exports = {
    images: {
        loader: 'custom',
        loaderFile: './lib/image/loader.ts',
      },
}

//   module.exports = {
//           basePath: '/waitlist',
//   }