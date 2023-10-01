module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path:'https://res.cloudinary.com/dcqqa4tp/image/upload/'
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}