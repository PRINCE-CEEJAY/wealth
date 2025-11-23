import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'https://potential-parakeet-j6qvjg6jj72jgpp-3000.app.github.dev',
      ],
    },
  },
  turbo: { enabled: false } as any, // bypass TypeScript check
};

export default nextConfig;
