import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Skeleton,
} from "@mui/material";
import { Post } from "../features/blogsApi";
// import Technology from "@assets/Technology.png";
// import Health from "@assets/Food.jpg";
// import Food from "@assets/Health.jpg";
// import Sport from "@assets/Sport.jpg";
// import Politics from "@assets/Politics.jpg";
// import Business from "@assets/bussiness.jpg";

interface BlogCardProps {
  post?: Post;
  onClick: () => void;
  isLoading?: boolean;
  randomAvatar: string;
}

const tagImages: Record<string, string> = {
  Technology: new URL("../assets/Technology.png", import.meta.url).href,
  Health: new URL("../assets/Food.jpg", import.meta.url).href,
  Food: new URL("../assets/Health.jpg", import.meta.url).href,
  Sport: new URL("../assets/Sport.jpg", import.meta.url).href,
  Politics: new URL("../assets/Politics.jpg", import.meta.url).href,
  Business: new URL("../assets/bussiness.jpg", import.meta.url).href,
};

const BlogCard: React.FC<BlogCardProps> = ({
  post,
  onClick,
  isLoading,
  randomAvatar,
}) => {
  if (isLoading) {
    return (
      <Card
        sx={{
          borderRadius: "12px",
          border: "1px solid #E8E8EA",
          maxWidth: "392px",
          padding: "16px",
          maxHeight: "520px",
          height: "100%",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Skeleton
          variant="rectangular"
          animation="wave"
          height={240}
          sx={{ borderRadius: "6px", marginBottom: "16px", bgcolor: "#E8E8EA" }}
        />
        <CardContent>
          <Box display="flex" gap={1} mt={2} flexWrap="wrap">
            {[1, 2, 3].map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                height={24}
                width={98}
                sx={{ borderRadius: "6px", marginRight: "8px" }}
              />
            ))}
          </Box>
          <Skeleton
            variant="text"
            height={32}
            width="80%"
            sx={{ marginTop: "16px" }}
          />
          <Skeleton variant="text" height={20} width="90%" />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton variant="text" width={60} height={16} />
            </Box>
            <Skeleton variant="text" width={50} height={16} />
          </Box>
        </CardContent>
      </Card>
    );
  }

  const firstTag = post?.tags?.[0];
  const imageSrc = firstTag ? tagImages[firstTag] : "";

  return (
    <Card
      onClick={onClick}
      sx={{
        borderRadius: "12px",
        border: "1px solid #E8E8EA",
        maxWidth: "392px",
        padding: "16px",
        maxHeight: "520px",
        height: "100%",

        transition: "transform 0.3s,  0.3s",
        "&:hover": {
          transform: "scale(1.03)",
        },
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="240"
        image={imageSrc}
        alt={post?.title}
        sx={{
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      <CardContent sx={{ maxHeight: "300px", height: "100%" }}>
        <Box display="flex" gap={1} mt={2} flexWrap="wrap">
          {post?.tags?.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              // size="small"
              sx={{
                backgroundColor: "#4B6BFB0D",
                color: "#4B6BFB",
                padding: "4px 10px",
                fontWeight: "bold",
                minWidth: "98px",
                borderRadius: "6px",
              }}
            />
          ))}
        </Box>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "1.5",
            color: "#333",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
            minHeight: "72px",
          }}
        >
          {post?.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "0.95rem",
            lineHeight: "1.5",
            color: "#666",
          }}
        >
          {post?.body.slice(0, 70)}...
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          sx={{ color: "#999", fontSize: "0.8rem" }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar
              src={randomAvatar}
              alt={post?.author}
              sx={{ width: 32, height: 32 }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontSize: "0.8rem",
                display: "block",
                marginTop: "0.5rem",
                color: "#97989F",
              }}
            >
              {post?.author}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              fontSize: "0.8rem",
              display: "block",
              marginTop: "0.5rem",
              color: "#999",
            }}
          >
            {post?.date}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
