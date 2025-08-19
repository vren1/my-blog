import path from "path"
import fs from "fs"
import { promisify } from "util"

const postsDirectory = path.join(process.cwd(), "src", "app", "posts")

function findMdxPaths(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      return findMdxPaths(fullPath)
    } else if (entry.isFile() && entry.name === "page.mdx") {
      return [fullPath]
    }
    return []
  })
}

export async function getPosts(): Promise<any[]> {
  const mdxPaths = findMdxPaths(postsDirectory)

  const posts = await Promise.all(
    mdxPaths.map(async (filePath) => {
      const slug = path
        .relative(postsDirectory, path.dirname(filePath))
        .replace(/\\/g, "/")

      // Convert absolute path to importable path
      const importPath = path
        .relative(process.cwd(), filePath)
        .replace(/\\/g, "/")
        .replace(/\.mdx$/, "")

      const mod = await import(`../${importPath}`)
      const metadata = mod.metadata || {}

      return {
        slug,
        title: metadata.title || null,
        description: metadata.description || null,
      }
    })
  )

  return posts
}
