import './short-cute-comics.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageGallery from 'react-image-gallery';
import comic_a_1 from '../../assets/comic_a_1.jpeg';
import comic_a_2 from '../../assets/comic_a_2.jpeg';
import comic_b_1 from '../../assets/comic_b_1.jpeg';
import comic_b_2 from '../../assets/comic_b_2.jpeg';
import comic_b_3 from '../../assets/comic_b_3.jpeg';
import comic_b_4 from '../../assets/comic_b_4.jpeg';
import comic_b_5 from '../../assets/comic_b_5.jpeg';
import comic_c_1 from '../../assets/comic_c_1.jpeg';
import comic_c_2 from '../../assets/comic_c_2.jpeg';
import comic_c_3 from '../../assets/comic_c_3.jpeg';

import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from 'react';

const ShortCuteComics = () => {
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
      original: comic_a_2
    },
    {
      original: comic_a_1
    }
  ];



  return (
    <div className='page-wrapper'>
      <h2 className='short-cute-comics-title'>Short Cute Comics</h2>
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

export default ShortCuteComics;