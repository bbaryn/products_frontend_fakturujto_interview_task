import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../createStore';

const selectProductState = (state: RootState) => state.productStore.products;
const selectCurrentElementId = (state: RootState) => state.productStore.currentElementId;

export const selectProducts = createSelector(
  selectProductState,
  products => products,
);

export const selectProduct = createSelector(
  [selectProductState, selectCurrentElementId],
  (products, id) => products.find(product => product._id === id),
);
