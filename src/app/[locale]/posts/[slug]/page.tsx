import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { notFound } from "next/navigation";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const PostPage = async ({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) => {
  // get the file from slug in the posts directory
  const enPostsDirectory = path.join(process.cwd(), "src/posts/en");
  const itPostsDirectory = path.join(process.cwd(), "src/posts/it");

  const enFilesname = fs.readdirSync(enPostsDirectory);
  const itFilesname = fs.readdirSync(itPostsDirectory);

  const enFilePath = enFilesname.find((filename) => filename.includes(slug));
  const itFilePath = itFilesname.find((filename) => filename.includes(slug));
  if (!enFilePath || !itFilePath) {
    return notFound();
  }

  const enFileContent = fs.readFileSync(
    path.join(enPostsDirectory, enFilePath),
    "utf8"
  );
  const itFileContent = fs.readFileSync(
    path.join(itPostsDirectory, itFilePath),
    "utf8"
  );
  console.log(enFileContent);

  return (
    <div>
      {enFileContent && (
        <div className="h-44 bg-gray-50 w-full">
          <div className="text-accent-default">{enFileContent}</div>
        </div>
      )}
      {itFileContent && (
        <div className="h-44 bg-accent-default w-full">
          <div className="text-accent-default">{itFileContent}</div>
        </div>
      )}
    </div>
  );
};

export default PostPage;

export async function generateStaticParams() {
  const enPostsDirectory = path.join(process.cwd(), "src/posts/en");
  const itPostsDirectory = path.join(process.cwd(), "src/posts/it");

  const enFilesname = fs.readdirSync(enPostsDirectory);
  const itFilesname = fs.readdirSync(itPostsDirectory);

  const enPaths = enFilesname.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, "") },
  }));

  const itPaths = itFilesname.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, "") },
  }));
  const enPathLocale = `/en/posts`;
  const itPathLocale = `/it/posts`;

  const enFullPaths = enPaths.map((path) => ({
    params: { slug: `${enPathLocale}/${path.params.slug}` },
  }));

  const itFullPaths = itPaths.map((path) => ({
    params: { slug: `${itPathLocale}/${path.params.slug}` },
  }));
  // return slugs for each locale paths with locate
  return [...enFullPaths, ...itFullPaths].map((path) => ({
    slug: path.params.slug,
  }));
}
