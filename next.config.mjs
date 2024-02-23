/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.openai.com',
        port: '',
      },
    ],
  },
}

export default nextConfig;
