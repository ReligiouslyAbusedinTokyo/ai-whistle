/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true
    },
    images: {
      remotePatterns: [
         {
          protocol: 'https',
         hostname: 'lovely-flamingo-139.convex.cloud'
         },
         {
           protocol: 'https',
           hostname: 'sleek-capybara-771.convex.cloud'
         },
        {
          protocol: 'https',
          hostname: 'img.clerk.com'
        },
        {
          protocol:'https',
          hostname: 'unique-ptarmigan-787.convex.cloud'
        },
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
        },
      ]
    }
  };
  
  export default nextConfig;