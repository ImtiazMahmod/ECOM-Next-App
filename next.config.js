/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  env: {
    MONGODB_URI: "mongodb://localhost:27017/ecom",
  },
};
