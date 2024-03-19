import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/product";

const initialState: IProduct[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initProducts: (_, action: PayloadAction<IProduct[]>) => {
      return action.payload as IProduct[];
    },
    addCart: (state, action: PayloadAction<number>) => {
      const count = state[action.payload].count
      if(count <= 9) state[action.payload].count += 1;
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const count = state[action.payload].count
      if(count >= 2) state[action.payload].count -= 1;
    },
    deleteCart: (state, action: PayloadAction<number>) => {
      return state.filter((_, idx) => idx !== action.payload);
    },
  },
});

export const { initProducts, addCart, removeCart, deleteCart } = productsSlice.actions;

export default productsSlice.reducer;
