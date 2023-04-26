const withImages = require("next-images");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  basePath: '/dashboard',
}


module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg", "mp4"],
  esModule: true,
  webpack(config, options) {
    return config;
  },
});

module.exports = nextConfig