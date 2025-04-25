import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['*'],
  },
  env: {
    NEXT_PUBLIC_SERVICE_API: process.env.NEXT_PUBLIC_SERVICE_API || 'http://localhost:8080/api'
  }
};

export default nextConfig;
