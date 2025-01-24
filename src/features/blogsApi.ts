import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
  author: string;
  id: number;
  title: string;
  body: string;
  thumbnail: string;
  tags: string[];
  date: string;
}
export interface Photo {
  id: number;
  photographer: string;
  src: {
    original: string;
    medium: string;
    small: string;
  };
  alt: string;
}

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = blogsApi;
