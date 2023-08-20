module.exports = {
  poweredByHeader: false
};

const nextConfig = {    
   reactStrictMode: true,
    images: {
      loader: 'cloudinary',
      path:'https://res.cloudinary.com/dcqqa4tp/image/upload/'
    }
  }