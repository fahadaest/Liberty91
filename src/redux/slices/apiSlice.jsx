import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_URL;

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        // prepareHeaders: (headers, { getState }) => {
        //     const token = getState().auth.token;
        //     if (token) {
        //         headers.set('Authorization', `Bearer ${token}`);
        //     }
        //     return headers;
        // },
        prepareHeaders: (headers) => {
            const dummyToken = '50834adabfcb081ca5871a4c3a52b1f6ea7c0e05';
            headers.set('Authorization', `Bearer ${dummyToken}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchOpenSourceFeed: builder.query({
            query: (pageSize = 30) =>
                `api/v1/dashboard/open_source/feed/?page_size=${pageSize}`,
        }),
        fetchPremiumFeed: builder.query({
            query: () => `api/v1/dashboard/premium/feed/`,
        }),
        fetchTwitterFeed: builder.query({
            query: () => `api/v1/dashboard/twitter/feed/`,
        }),
    }),
});

export const {
    useFetchOpenSourceFeedQuery,
    useFetchPremiumFeedQuery,
    useFetchTwitterFeedQuery,
} = apiSlice;
