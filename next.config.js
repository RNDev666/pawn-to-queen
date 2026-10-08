/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // No basePath: served from the custom domain pawntoqueen.cc.
  // Without the custom domain, set basePath: "/pawn-to-queen".
};

export default config;
