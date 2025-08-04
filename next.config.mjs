/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Ensure CSS is properly processed in production
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  // Ensure CSS is properly bundled
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Ensure CSS is properly processed in production
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css|scss)$/,
        chunks: 'all',
        enforce: true,
      };
    }
    return config;
  },
}

export default nextConfig
