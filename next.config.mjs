/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/fleet",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/routes",
        destination: "/gujarat-routes",
        permanent: true,
      },
      {
        source: "/packages",
        destination: "/gujarat-routes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
