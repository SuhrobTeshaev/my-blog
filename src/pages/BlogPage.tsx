import React, { useEffect, useMemo, useState } from "react";
import {
  useGetPostsQuery,
  //   useGetPhotosQuery,
  Post,
} from "../features/blogsApi";
import BlogList from "../components/BlogList";
import FilterBar from "../components/FilterBar";
import { Box, Skeleton, Typography } from "@mui/material";
import PaginationBar from "../components/Pagination";
import PostModal from "../components/Modal";
import debounce from "lodash.debounce";
import Banner from "../components/Banner";

type Tag = "Technology" | "Health" | "Food" | "Sport" | "Politics" | "Business";

const BlogPage: React.FC = () => {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();

  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const tagKeywords = [
    "Technology",
    "Health",
    "Food",
    "Sport",
    "Politics",
    "Business",
  ];

  const tagGroups: Record<Tag, Tag[]> = {
    Technology: ["Technology", "Business"],
    Health: ["Health", "Food", "Sport"],
    Politics: ["Politics"],
    Sport: ["Sport", "Health"],
    Food: ["Food", "Health"],
    Business: ["Business", "Technology"],
  };

  const firstNames = [
    "John",
    "Emily",
    "Michael",
    "Sarah",
    "Robert",
    "Jessica",
    "David",
    "Sophia",
    "James",
    "Olivia",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
  ];
  const randomAvatar = useMemo(() => {
    const gender = Math.random() > 0.5 ? "men" : "women";
    const index = Math.floor(Math.random() * 100);
    const avatarUrl = `https://randomuser.me/api/portraits/${gender}/${index}.jpg`;

    return avatarUrl;
  }, []);

  const generateRandomName = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  };
  const generateRandomDate = (start: Date, end: Date) => {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const postsWithTags = useMemo(() => {
    return posts.map((post) => {
      const mainTag: Tag = tagKeywords[
        Math.floor(Math.random() * tagKeywords.length)
      ] as Tag;

      const relatedTags = tagGroups[mainTag] || [];
      const numberOfRelatedTags = Math.min(2, relatedTags.length);
      const tags = Array.from(
        { length: numberOfRelatedTags },
        () => relatedTags[Math.floor(Math.random() * relatedTags.length)],
      );

      const uniqueTags = Array.from(new Set([...tags, mainTag]));

      return {
        ...post,
        tags: uniqueTags as Tag[],
        date: generateRandomDate(new Date(2022, 0, 1), new Date()),
        author: generateRandomName(),
      };
    });
  }, [posts]);

  useEffect(() => {
    if (selectedTags.length === 0 && !searchQuery) {
      setFilteredPosts(postsWithTags);
    } else {
      let result = postsWithTags;

      if (selectedTags.length > 0) {
        result = result.filter((post) =>
          selectedTags.every((tag: any) => post.tags?.includes(tag)),
        );
      }

      if (searchQuery) {
        result = result.filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      }

      setFilteredPosts(result);
    }
  }, [postsWithTags, selectedTags, searchQuery]);

  const handleTagFilter = (tags: string[]) => {
    setSelectedTags(tags);
  };

const handleSearch = debounce((query: string) => {
  const normalizedQuery = query.trim().toLowerCase();
  setSearchQuery(normalizedQuery);
  setFilteredPosts(
    postsWithTags.filter((post) =>
      post.title.toLowerCase().includes(normalizedQuery)
    )
  );
}, 500);

  const handlePageChange = (newPage: number) => setPage(newPage);

  const handleItemsPerPageChange = (items: number) => setItemsPerPage(items);

  return (
    <Box sx={{ padding: "0 20px", maxWidth: "1400px", margin: "0 auto" }}>
      <Banner />
      <FilterBar onSearch={handleSearch} onTagFilter={handleTagFilter} />
      {isError && (
        <Typography color="error" variant="h6">
          Что-то пошло не так!
        </Typography>
      )}
      {isLoading ? (
        <Box
          display="flex"
          flexWrap="wrap"
          gap={2}
          sx={{ mx: "auto", display: "flex", justifyContent: "center" }}
        >
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={392}
              height={520}
              sx={{ borderRadius: "12px" }}
            />
          ))}
        </Box>
      ) : (
        <>
          <BlogList
            posts={filteredPosts.slice(
              (page - 1) * itemsPerPage,
              page * itemsPerPage
            )}
            onPostClick={(post) => setSelectedPost(post)}
            isLoading={isLoading}
            randomAvatar={randomAvatar}
          />
          <PaginationBar
            count={Math.ceil(filteredPosts.length / itemsPerPage)}
            page={page}
            itemsPerPage={itemsPerPage}
            onChangePage={handlePageChange}
            onChangeItemsPerPage={handleItemsPerPageChange}
          />
        </>
      )}
      <PostModal
        open={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        post={selectedPost}
        randomAvatar={randomAvatar}
      />
    </Box>
  );
};

export default BlogPage;
