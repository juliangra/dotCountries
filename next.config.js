/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  env: {
    URL: process.env.URL,
    MAPBOX_KEY: process.env.MAPBOX_KEY,
  }
}
