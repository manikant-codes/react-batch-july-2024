import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  (sortOrder) => {
    return fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`).then(
      (response) => {
        return response.json();
      }
    );
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: null,
    error: "",
  },
  reducers: {
    // getAllProducts: (state, action) => {
    //   fetch(`https://fakestoreapi.com/products?sort=${action.payload}`)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       state.products = data;
    //       state.error = "";
    //     })
    //     .catch((error) => {
    //       state.error = error.message;
    //       state.products = null;
    //     })
    //     .finally(() => {
    //       state.loading = false;
    //     });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.loading = true;
      state.products = null;
      state.error = "";
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = null;
      state.error = action.payload.message;
    });
  },
});

// export const { getAllProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
