import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
    id: number;
    title: string;
    body: string;
    thumbnail: string;
    tags: string[];
}

export const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'posts',
        }),
        getPhotos: builder.query<{ id: number; thumbnailUrl: string }[], void>({
            query: () => 'photos',
        }),
    }),
});

export const { useGetPostsQuery, useGetPhotosQuery } = blogsApi;
