import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "./type";


let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhdXJhdmtyMjE3OTdAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2dhdXJhdmtycyIsImlhdCI6MTY2NDAwMjc4MywiZXhwIjoxNjY0NDM0NzgzfQ.xmgekSw1TS3MAwx0T1Fek3W94K-RXLytL-jd5nNjJH0"

export interface ICategoryData {
    message: string;
    categories: ICategory[];
}

export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://upayments-studycase-api.herokuapp.com/api/"
    }),
    endpoints: (builder) => ({
        getAllCategories: builder.query<ICategoryData, void>({
            query: () => ({
                url: "categories",
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            })
        })
    })
})

export const { useGetAllCategoriesQuery } = categoryApi


