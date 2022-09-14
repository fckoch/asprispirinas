import './homem-xx.css';
import ImageGallery from 'react-image-gallery';
import comic_b_1 from '../../assets/comic_b_1.jpeg';
import comic_b_2 from '../../assets/comic_b_2.jpeg';
import comic_b_3 from '../../assets/comic_b_3.jpeg';
import comic_b_4 from '../../assets/comic_b_4.jpeg';
import comic_b_5 from '../../assets/comic_b_5.jpeg';

import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from 'react';

const HomemXX = () => {
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
      original: comic_b_1
    },
    {
      original: comic_b_2
    },
    {
      original: comic_b_3
    },
    {
      original: comic_b_4
    },
    {
      original: comic_b_5
    }
  ];

  return (
    <div className='page-wrapper'>
      <h2>Homem XX</h2>
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

export default HomemXX;