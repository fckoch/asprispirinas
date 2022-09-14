
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about';
import Header from './components/header/header';
import './App.css';
import Footer from './components/footer/footer';
import RustyAndSnowflake from './components/rusty-and-snowflake/rusty-and-snowflake';
import ShortCuteComics from './components/short-cute-comics/short-cute-comics';
import ACarruagem from './components/a-carruagem/a-carruagem';
import HomemXX from './components/homem-xx/homem-xx';
import Sidebar from './components/sidebar/sidebar';
import { useEffect, useState } from 'react';

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div className='app-container'>
      <Sidebar></Sidebar>
      <div className='app'>
        {isMobile ? <Header></Header> : ''}
        <Routes>
          <Route path="/" element={<Portfolio/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<About/>} />
          <Route path="/rusty-and-snowflake" element={<RustyAndSnowflake/>} />
          <Route path="/yuke" element={<ShortCuteComics/>} />
          <Route path="/homem-xx" element={<HomemXX/>} />
          <Route path="/a-carruagem" element={<ACarruagem/>} />
          <Route path="/a-gosma" element={<ACarruagem/>} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;