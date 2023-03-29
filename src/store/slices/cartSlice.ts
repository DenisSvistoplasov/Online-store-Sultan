import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../data/catalog";
import { RootState } from "../store";
import defaultBasket from "../../data/defaultBasket.json";

interface ICartState {
  productsIds: { [id: string]: number; };
  totalCount: number;
}

const LOCAL_STORAGE_KEY = 'cart-data';

const localCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || 'null');

const initialState = localCart as ICartState || defaultBasket;

const saveLocally = (state: ICartState) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    plusToCart(state, action: PayloadAction<string | undefined>) {
      if (!action.payload) return;
      if (!state.productsIds[action.payload]) state.productsIds[action.payload] = 0;
      state.productsIds[action.payload]++;
      state.totalCount++;
      saveLocally(state);
    },
    minusFromCart(state, action: PayloadAction<string | undefined>) {
      if (!action.payload) return;
      if (state.productsIds[action.payload]) {
        state.productsIds[action.payload]--;
        state.totalCount--;
        if (state.productsIds[action.payload] === 0) delete state.productsIds[action.payload];
        saveLocally(state);
      }
    },
    removeFromCart(state, action: PayloadAction<string | undefined>) {
      if (!action.payload) return;
      if (state.productsIds[action.payload]) {
        state.totalCount -= state.productsIds[action.payload];
        state.productsIds[action.payload] = 0;
        delete state.productsIds[action.payload];
        saveLocally(state);
      }
    },
    clearCart(state) {
      state.productsIds = {};
      state.totalCount = 0;
      saveLocally(state);
    },
  }
});

export default cartSlice.reducer;

export const { plusToCart, minusFromCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartProductsIds = (state: RootState) => state.cart.productsIds;
export const selectCartTotalCount = (state: RootState) => state.cart.totalCount;
export const selectProductInCartCount = (id?: string) => (state: RootState) => id ? (state.cart.productsIds[id] || 0) : 0;
export const selectCartTotalCost = (state: RootState) => {
  const catalog = state.products.data;
  const cartProductsIds = state.cart.productsIds;
  let totalCost = 0;

  for (const key in cartProductsIds) {
    let cost = catalog.find(product => product.id == key)?.price || 0;
    totalCost += cost * cartProductsIds[key];
  }

  return totalCost;
};
export const selectCartRepresentation = (state: RootState) => {
  const isLoading = state.products.meta.status === 'loading';
  const catalog = state.products.data;
  const cartProductsIds = state.cart.productsIds;

  const cartProducts = [] as (IProduct & { count: number; cost: number; })[];
  let totalCost = 0;

  if (!isLoading) {
    for (const id in cartProductsIds) {
      const count = cartProductsIds[id];
      const product = catalog.find(product => product.id == id);

      if (!product) throw new Error('Product in basket does not exist in catalog (id: ' + id + ')');

      const cost = product.price * count;
      cartProducts.push({ ...product, count, cost });
      totalCost += cost;
    }
  }

  return {
    products: cartProducts,
    totalCost
  };
};