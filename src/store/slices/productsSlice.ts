import { PayloadAction, SerializedError, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct, productTypes } from "../../data/catalog";
import { fetchStatus } from "../../types/types";
import { RootState } from "../store";

const LOCAL_STORAGE_KEY = 'products-data';

export const getProducts = createAsyncThunk<IProduct[]>(
  'products/getProducts',
  async () => {
    let data = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (data) return JSON.parse(data);
    return (await import('../../data/catalog')).default;
  });


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [] as IProduct[],
    meta: {
      status: 'loading' as fetchStatus,
      error: '' as string | SerializedError
    }
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.meta.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.meta.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.meta.status = "failed";
        state.meta.error = action.error;
      });
  }
});
export default productsSlice.reducer;

export const selectProductsStatus = (state: RootState) => state.products.meta.status;
export const selectProducts = (state: RootState) => state.products.data;
export const selectProductsByIds = (ids: (string | number)[]) => (state: RootState) => {
  return state.products.data.filter(product => ids.includes(product.id + ''));
};
export const selectBrandsAndManufacturers = (state: RootState) => {
  const res = {
    brands: [] as { value: string; count: number; }[],
    manufacturers: [] as { value: string; count: number; }[]
  };
  const brands = {} as { [key: string]: number; };
  const manufacturers = {} as { [key: string]: number; };

  state.products.data.forEach(product => {
    if (!brands[product.brand]) brands[product.brand] = 0;
    if (!manufacturers[product.manufacturer]) manufacturers[product.manufacturer] = 0;
    brands[product.brand]++;
    manufacturers[product.manufacturer]++;
  });

  for (const key in brands) {
    res.brands.push({ value: key, count: brands[key] });
  }
  for (const key in manufacturers) {
    res.manufacturers.push({ value: key, count: manufacturers[key] });
  }

  return res;
};
export const selectProductsTypes = (state: RootState) => {
  const set = new Set<productTypes>();
  state.products.data.forEach(product => product.types.forEach(t => set.add(t)));
  return [...set];
};
