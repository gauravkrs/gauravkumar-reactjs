import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "./type";



let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhdXJhdmtyMjE3OTdAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2dhdXJhdmtycyIsImlhdCI6MTY2NDAwMjc4MywiZXhwIjoxNjY0NDM0NzgzfQ.xmgekSw1TS3MAwx0T1Fek3W94K-RXLytL-jd5nNjJH0"

export interface IProductData {
    message: string;
    products: IProduct[]
}

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://upayments-studycase-api.herokuapp.com/api"
    }),
    tagTypes: ["IProduct"],
    endpoints: (builder) => ({
        getAllProduct: builder.query<IProductData, void>({
            query: () => ({
                url: "/products",
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            })
        }),
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            })
        }),
        addProduct: builder.mutation<void, IProduct>({
            query: (data) => ({
                url: "/products",
                method: "POST",
                body: data,
                headers: { Authorization: `Bearer ${token}` }
            })
        }),

    })
})

export const { useGetAllProductQuery, useGetSingleProductQuery, useAddProductMutation } = productApi