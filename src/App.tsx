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

export function App() {
  return (
    // <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <BreakpointProvider>
          <div className='app'>
            <Header />
            <main className="main">
              <Navigation />
              <Routes>
                <Route path="/" element={<CatalogPage />} />
                <Route path="/catalog/:type?" element={<CatalogPage />} />
                <Route path="/product/:id" element={<OneProductPage />} />
                <Route path="/basket" element={<BasketPage />} />
                {/* <Route path="/cart" element={<OneProductPage />} /> */}
              </Routes>
            </main>
            <Footer />
          </div>
        </BreakpointProvider>
      </Provider>
    </HashRouter>
    // </React.StrictMode>
  );
}