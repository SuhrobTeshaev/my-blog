import React from "react";
import {
  Modal,
  Box,
  Typography,
  CardMedia,
  Avatar,
  Chip,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Post } from "../features/blogsApi";
import img from "../assets/Food.jpg";

interface PostModalProps {
  open: boolean;
  onClose: () => void;
  post: Post | null;
  randomAvatar: string;
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  minWidth: 300,
  height: "auto",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: 2,
};

const PostModal: React.FC<PostModalProps> = ({
  open,
  onClose,
  post,
  randomAvatar,
}) => {
  if (!post) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 2,
            right: 3,
            color: "#999",
            marginBottom: 4,
          }}
        >
          <Close />
        </IconButton>
        <CardMedia
          component="img"
          height="200"
          image={post.thumbnail || img}
          alt={post.title}
          sx={{ mb: 2, borderRadius: "8px" }}
        />

        <Box display="flex" gap={1} mb={2}>
          {post.tags?.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              sx={{
                backgroundColor: "#4B6BFB0D",
                color: "#4B6BFB",
                padding: "4px 10px",
                fontWeight: "bold",
                borderRadius: "6px",
              }}
            />
          ))}
        </Box>
        <Typography
          variant="h6"
          component="h2"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          {post.title}
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, height: "100%" }}>
          {post.body}
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          sx={{ color: "#999" }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar
              src={randomAvatar}
              alt={post.author}
              sx={{ width: 32, height: 32 }}
            />
            <Typography variant="caption" sx={{ color: "#97989F" }}>
              {post.author}
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: "#999" }}>
            {post.date}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default PostModal;
