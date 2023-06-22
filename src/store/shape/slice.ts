import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialState, Product } from '@typing/global';

const initialState: InitialState = {
  products: [],
  currentElementId: '',
};

export const shapeSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addCurrentElementId: (state, action: PayloadAction<string>) => {
      state.currentElementId = action.payload;
    },
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload]
    },
    editProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.map(product => {
        if (product._id === action.payload._id) {
          return {...product, ...action.payload};
        }
      
        return product;
      });
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product._id !== action.payload)
    },
  }
})

export const { addCurrentElementId, addProducts, addProduct, editProduct, deleteProduct } = shapeSlice.actions;

export default shapeSlice.reducer;
