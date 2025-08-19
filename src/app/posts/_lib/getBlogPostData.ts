import type { Metadata } from "next/types"
import path from "path"
import fs from "fs"
import matter from "gray-matter"

export type PostMetadata = Metadata & {
  title: string
  description: string
}

export type BlogPostData = {
  slug: string
  metadata: Metadata
}

export async function getBlogPostMetadata(
  slug: string
): Promise<BlogPostData | null> {
  const postsDirectory = path.join(process.cwd(), "src", "blog")
  const fileName = path.join(postsDirectory, slug + ".mdx")

  const fileContents = fs.readFileSync(fileName, "utf8")
  const { data } = matter(fileContents)

  if (!data.title || !data.description) {
    console.warn(`Missing metadata in ${fileName}`)
    return null
  }

  return {
    slug,
    metadata: data,
  }
}
