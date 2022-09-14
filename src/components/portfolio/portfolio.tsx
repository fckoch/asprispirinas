import miau from '../../assets/miau.jpeg';
import hahah from '../../assets/hahah.jpeg';
import crispim from '../../assets/crispim.jpeg';
import watchout from '../../assets/watchout.jpeg';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className='page-wrapper'>
      <div className='portfolio'>
        <div className='card-wrapper'>
          <img className='card-image top' src={watchout} alt="logo" />
        </div>
        <div className='card-wrapper'>
          <img className='card-image' src={crispim} alt="logo" />
        </div>
        <div className='card-wrapper'>
          <img className='card-image top' src={miau} alt="logo" />
        </div>
        <div className='card-wrapper'>
          <img className='card-image' src={hahah} alt="logo" />
        </div>
        <div className='card-wrapper'>
          <img className='card-image top' src={hahah} alt="logo" />
        </div>
        <div className='card-wrapper'>
          <img className='card-image' src={watchout} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;