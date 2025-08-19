import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "src", "blog")
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)

      if (!data.title || !data.description) {
        console.warn(`Missing metadata in ${fileName}`)
        return null
      }

      return {
        slug,
        title: data.title,
        description: data.description,
      }
    })
    .filter(Boolean)
}
