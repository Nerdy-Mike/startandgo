import path from "path";
import { MetadataRoute } from "next";
import { getMdxFiles, createPostsPaths } from "@/utils/getMdFilePath";

import { SITE_URL } from "@/constants/url";

const POSTS_DIRECTORY = "public/assets/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const enPostsDirectory = path.join(process.cwd(), `${POSTS_DIRECTORY}/en`);
  const itPostsDirectory = path.join(process.cwd(), `${POSTS_DIRECTORY}/it`);

  const enPaths = getMdxFiles(enPostsDirectory);
  const itPaths = getMdxFiles(itPostsDirectory);

  const enPostsPaths = createPostsPaths(enPaths, "en");
  const itPostsPaths = createPostsPaths(itPaths, "it");

  return [
    {
      url: `https://${SITE_URL}/en`,
      lastModified: new Date(),
    },
    {
      url: `https://${SITE_URL}/it`,
      lastModified: new Date(),
    },
    ...enPostsPaths,
    ...itPostsPaths,
  ];
}
