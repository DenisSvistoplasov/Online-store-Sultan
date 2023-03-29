import React from "react";
import './app.global.sass';
import { BreakpointProvider } from "./context/BreakpointContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CatalogPage } from "./components/CatalogPage";
import { IconBarsUp } from "./components/icons/barsUp";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { OneProductPage } from "./components/OneProductPage";
import { IProduct } from "./data/catalog";
import aosImg from './assets/img/products/AOS.png';
import { BasketPage } from "./components/BasketPage";
import { Main } from "./components/Main";

export function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <BreakpointProvider>
          <div className='app'>
            <Header />
            <Main/>
            <Footer />
          </div>
        </BreakpointProvider>
      </Provider>
    </HashRouter>
  );
}