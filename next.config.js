/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    const isProd = process.env.NODE_ENV === "production";
    return isProd
      ? [
          {
            source: "/about.html",
            destination: "/about",
          },
        ]
      : [];
  },
  trailingSlash: true,
};

export default nextConfig;
