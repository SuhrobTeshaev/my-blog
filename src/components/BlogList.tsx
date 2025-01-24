import React from "react";
import BlogCard from "./BlogCard";
import { Post } from "../features/blogsApi";
import { Box, Typography } from "@mui/material";

interface BlogListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
  isLoading: boolean;
  randomAvatar: string;
}

const BlogList: React.FC<BlogListProps> = ({
  posts,
  onPostClick,
  isLoading,
  randomAvatar,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "32px",
        justifyContent: posts.length > 0 ? "center" : "center",
        alignItems: posts.length > 0 ? "flex-start" : "center",
        minHeight: "60vh",
      }}
    >
      {isLoading && posts.length === 0 ? (
        <Typography variant="h6" color="text.secondary" textAlign="center">
          Загрузка...
        </Typography>
      ) : !isLoading && posts.length === 0 ? (
        <Typography variant="h6" color="text.secondary" textAlign="center">
          Посты не найдены
        </Typography>
      ) : (
        posts.map((post) => (
          <Box key={post.id}>
            <BlogCard
              post={post}
              onClick={() => onPostClick(post)}
              isLoading={isLoading}
              randomAvatar={randomAvatar}
            />
          </Box>
        ))
      )}
    </Box>
  );
};

export default BlogList;
