/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Natro hosting compatibility
  // Comment out this line if deploying to Vercel
  output: "export",

  // For static export, we need to use unoptimized images
  // since there's no server to handle image optimization
  images: {
    unoptimized: true,
  },

  // Trailing slash for better compatibility with traditional hosting
  trailingSlash: true,
};

export default nextConfig;
