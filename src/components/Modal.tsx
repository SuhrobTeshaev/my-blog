// src/components/PostModal.tsx

import React from "react";
import { Modal, Box, Typography, CardMedia } from "@mui/material";
import { Post } from "../features/blogsApi";
import img from "../assets/f034d712e5d8683587dabe2d01c212cb.jpg";


interface PostModalProps {
  open: boolean;
  onClose: () => void;
  post: Post | null;
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400, 
  minWidth: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const PostModal: React.FC<PostModalProps> = ({ open, onClose, post }) => {
  if (!post) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle} >
        {/* Изображение поста */}
        <CardMedia
          component="img"
          height="200"
          image={post.thumbnail || img}
          alt={post.title}
          sx={{ mb: 2, borderRadius: "8px" }}
        />
        {/* Заголовок */}
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          {post.title}
        </Typography>
        {/* Полный текст */}
        <Typography variant="body1" sx={{ mb: 2 }}>
          {post.body}
        </Typography>
      </Box>
    </Modal>
  );
};

export default PostModal;
