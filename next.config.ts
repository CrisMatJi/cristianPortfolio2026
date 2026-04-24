import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/cristianPortfolio2026" : "",
  assetPrefix: isProd ? "/cristianPortfolio2026/" : "",
};

export default nextConfig;
