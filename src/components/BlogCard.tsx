import React from "react";
import { Card, CardContent, CardMedia, Typography} from "@mui/material";
import { Post } from "../features/blogsApi";
import img from "../assets/f034d712e5d8683587dabe2d01c212cb.jpg";

interface BlogCardProps {
  post: Post;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => (
  <Card
    onClick={onClick}
    
    sx={{
      borderRadius: "1rem",
      maxWidth: "400px",
      transition: "transform 0.3s", 
      "&:hover": {
        transform: "scale(1.05)", 
      },
    }}
  >
    <CardMedia
      component="img"
      height="150"
      image={post.thumbnail || img}
      // image={post.thumbnail || "https://via.placeholder.com/150"}
      alt={post.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5">
        {post.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {post.body.slice(0, 50)}...
      </Typography>
    </CardContent>
  </Card>
);

export default BlogCard;
