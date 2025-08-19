"use client"
import React from "react"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material"

interface PostPreviewProps {
  title: string
  description: string
  imageUrl?: string
  postLink: string
}

const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  description,
  imageUrl,
  postLink,
}) => {
  return (
    <Card sx={{ width: "85%", margin: 2 }}>
      <CardActionArea href={postLink}>
        {imageUrl && (
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title}
          />
        )}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PostPreview
