import ImageGallery from 'react-image-gallery';
import './a-carruagem.css';
import comic_c_1 from '../../assets/comic_c_1.jpeg';
import comic_c_2 from '../../assets/comic_c_2.jpeg';
import comic_c_3 from '../../assets/comic_c_3.jpeg';

import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from 'react';

const ACarruagem = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  const isMobile = width <= 768;

  const images = [
    {
      original: comic_c_1
    },
    {
      original: comic_c_2
    },
    {
      original: comic_c_3
    }
  ];

  return (
    <div className='page-wrapper'>
      <h2>A Carruagem</h2>
      <div className='gallery-wrapper'>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={!isMobile}
          infinite={false}
        />
      </div>
    </div>
  );
};

export default ACarruagem;