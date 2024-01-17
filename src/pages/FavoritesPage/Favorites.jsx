import { useState } from 'react';
import FavoriteCarCards from '../../components/FavoriteCarCards/FavoriteCarCards';
import ScrollToTop from 'react-scroll-to-top';

const Favorites = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <>
      <FavoriteCarCards />
      <ScrollToTop
        smooth
        color="var(--color-primary-blue)"
        style={{
          scrollBehavior: 'smooth',
          webkitTapHighlightColor: 'rgba(0,0,0,0)',
          userSelect: 'none',
          padding: '6px 0',
          borderRadius: '12px',
          boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.75)',
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </>
  );
};

export default Favorites;
