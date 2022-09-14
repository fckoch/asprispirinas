import './rusty-and-snowflake.css';
import ReactPlayer from "react-player"
import { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const RustyAndSnowflake = () => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  return (
    <div className="page-wrapper">
      <h2>Rusty and Snowflake</h2>
      <div className="player-wrapper">
        {isMobile ? (
          <ReactPlayer
            className="react-player"
            onReady={() => setVideoLoaded(true)}
            url="https://vimeo.com/742063015"
            height="30vh"
            width="90vw"
          />
        ) : (
          <ReactPlayer
            className="react-player"
            onReady={() => setVideoLoaded(true)}
            url="https://vimeo.com/742063015"
            height="75vh"
            width="72vw"
          />
        )}
      </div>
    </div>
  );
};

export default RustyAndSnowflake;