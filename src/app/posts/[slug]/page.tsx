import dynamic from "next/dynamic"
import { getBlogPostMetadata } from "@/app/posts/_lib/getBlogPostData"
import type { Metadata } from "next/types"
import { getBlogPosts } from "../_lib/getBlogPosts"

type BlogPageProps = { params: { slug: string } }

export default async function BlogPage({ params }: BlogPageProps) {
  const { metadata } = await getBlogPostMetadata(params.slug)
  const title = `${metadata.title ?? ""}`
  const BlogMarkdown = dynamic(() => import("@/blog/" + params.slug + ".mdx"))
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl">{title}</h2>
      <BlogMarkdown />
    </div>
  )
}

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts()
  const blogStaticParams = blogPosts.map((post) => ({
    slug: post?.slug,
  }))

  return blogStaticParams
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { metadata } = await getBlogPostMetadata(params.slug)

  if (metadata) {
    return metadata
  } else {
    throw new Error(`No metadata found for blog post: ${params.slug}`)
  }
}
