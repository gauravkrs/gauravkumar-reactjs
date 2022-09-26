import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "../service/categoryApi";
import { productApi } from "../service/productApi";


export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productApi.middleware, categoryApi.middleware]),
})

setupListeners(store.dispatch)