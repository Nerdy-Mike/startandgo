import fs from "fs";
// import dynamic from "next/dynamic";
import path from "path";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  slug: string;
  locale: string;
}

const readFile = (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, file) => {
      if (err) reject(err);
      resolve(file);
    });
  });
};

const PostPage = async ({ params: { slug, locale } }: { params: Params }) => {
  const _path = `public/assets/posts/${locale}/${slug}.md`;
  const content = await readFile(_path);

  console.log(content);

  return content;
};

export default PostPage;
