import { Box, Typography } from "@mui/material"
import PostPreview from "../components/PostPreview"
import { getBlogPosts } from "./_lib/getBlogPosts"

export default async function Home() {
  const posts = await getBlogPosts()
  return (
    <Box>
      <Typography variant="h1">Posts</Typography>
      <PostPreview
        title={posts[0]?.title}
        description={posts[0]?.description}
        postLink={`/posts/${posts[0]?.slug}`}
      />
    </Box>
  )
}
