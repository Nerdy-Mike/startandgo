/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

module.exports = withNextIntl(withMDX(nextConfig));
