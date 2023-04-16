import { useEffect } from "react";
import { getProducts } from "../store/slices/productsSlice";
import { useAppDispatch } from "./storeHooks";

export function useInitialize() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, []);
}