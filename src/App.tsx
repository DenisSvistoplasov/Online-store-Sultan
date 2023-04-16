import './app.global.sass';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { useInitialize } from './hooks/useInitialize';

export function App() {
  useInitialize();

  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}