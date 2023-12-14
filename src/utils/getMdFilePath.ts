import fs from "fs";

import { SITE_URL } from "@/constants/url";

// Get all mdx files from a directory
export const getMdxFiles = (directory: string) => {
  const filenames = fs.readdirSync(directory);
  return filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx?$/, "") },
  }));
};

// Function to create paths for posts
export const createPostsPaths = (
  paths: { params: { slug: string } }[],
  language: string
) => {
  return paths.map((path) => ({
    url: `https://${SITE_URL}/${language}/posts/${path.params.slug}`,
    lastModified: new Date(),
  }));
};
