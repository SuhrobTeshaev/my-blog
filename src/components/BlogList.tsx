import React from "react";
import BlogCard from "./BlogCard";
import { Post } from "../features/blogsApi";
import { Box } from "@mui/material";

interface BlogListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, onPostClick }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: 4,
    }}
  >
    {posts.map((post) => (
      <Box key={post.id}>
        <BlogCard post={post} onClick={() => onPostClick(post)} />
      </Box>
    ))}
  </Box>
);

export default BlogList;
