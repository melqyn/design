/** @type {import('next').NextConfig} */

// next.config.js
import path from 'path';
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add custom file loader for mp4 files
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `/_next/static/videos/`,
            outputPath: 'static/videos/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
