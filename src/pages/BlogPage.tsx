import React, { useEffect, useState } from "react";
import {
  useGetPostsQuery,
//   useGetPhotosQuery,
  Post,
} from "../features/blogsApi";
import BlogList from "../components/BlogList";
import FilterBar from "../components/FilterBar";
import { Box, CircularProgress } from "@mui/material";
import PaginationBar from "../components/Pagination";
import PostModal from "../components/Modal";

const BlogPage: React.FC = () => {
  const { data: posts = [], isLoading } = useGetPostsQuery();
//   const { data: photos = [] } = useGetPhotosQuery();

  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]); 

 const tagKeywords: { [key: string]: string[] } = {
   tech: ["maxime ", "dolorem ", "autem"],
   health: ["laborum ", "doloribus ", "alias "],
   food: ["magnam", "adipisci ", "provident "],
   sport: ["sint ", "repudiandae ", "voluptas "],
   politics: ["dolorum ", "dignissimos ", "ratione "],
   business: ["magnam", "adipisci ", "provident "],
 };

  useEffect(() => {
    // Если нет выбранных тегов, отображаем все посты
    if (selectedTags.length === 0) {
      setFilteredPosts(posts); // Отображаем все посты
      setPage(1); // Сбрасываем на первую страницу
    } else {
      const filteredByTags = filterPostsByTags(posts, selectedTags);
      setFilteredPosts(filteredByTags); // Отображаем посты по выбранным тегам
    }
  }, [posts, selectedTags]);

  // Функция фильтрации по тегам
  const filterPostsByTags = (posts: Post[], selectedTags: string[]) => {
    return posts.filter((post) => {
      return selectedTags.some((tag) => {
        // Для каждого тега проверяем, если его ключевое слово есть в теле поста
        return tagKeywords[tag]?.some(
          (keyword) => post.body.toLowerCase().includes(keyword.toLowerCase()) // Ищем в поле body
        );
      });
    });
  };
  const handleTagFilter = (tags: string[]) => {
    setSelectedTags(tags);
    const filteredByTags = filterPostsByTags(posts, tags);
    setFilteredPosts(filteredByTags);
     if (tags.length === 0) {
       setPage(1);
     }
  };


  const handleSearch = (query: string) => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handlePageChange = (newPage: number) => setPage(newPage);

  const handleItemsPerPageChange = (items: number) => setItemsPerPage(items);

  return (
    <Box sx={{ padding: "0 20px" }}>
      <FilterBar onSearch={handleSearch} onTagFilter={handleTagFilter} />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <BlogList
            posts={filteredPosts.slice(
              (page - 1) * itemsPerPage,
              page * itemsPerPage
            )}
            onPostClick={(post) => setSelectedPost(post)}
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
      />
    </Box>
  );
};

export default BlogPage;
