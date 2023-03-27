import React from "react";
import './app.global.sass';
import { BreakpointProvider } from "./context/BreakpointContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CatalogPage } from "./components/CatalogPage";
import { IconBarsUp } from "./components/icons/barsUp";

export function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BreakpointProvider>
          <div className='app'>
            <Header />
            <main className="main">
              <CatalogPage />
            </main>
            <Footer />
          </div>
        </BreakpointProvider>
      </Provider>
    </React.StrictMode>
  );
}