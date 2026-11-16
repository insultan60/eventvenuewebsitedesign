import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/repo-name"); empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  ...(isExport && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { loader: "custom", loaderFile: "./image-loader.ts" },
  }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
