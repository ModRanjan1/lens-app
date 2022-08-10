/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "ipfs.infura.io",
      "pbs.twimg.com",
      "avatar.tobi.sh",
      "statics-mumbai-lens-staging.s3.eu-west-1.amazonaws.com",
      "statics-polygon-lens-staging.s3.eu-west-1.amazonaws.com",
      "prnts.mypinata.cloud",
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
