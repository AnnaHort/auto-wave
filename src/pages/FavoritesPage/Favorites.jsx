import FavoriteCarCards from '../../components/FavoriteCarCards/FavoriteCarCards';
import ScrollToTop from 'react-scroll-to-top';

const Favorites = () => {
  return (
    <>
      <FavoriteCarCards />
      <ScrollToTop
        smooth
        color="#3470ff"
        style={{
          padding: '6px 0',
          borderRadius: '12px',
          boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.75)',
        }}
      />
    </>
  );
};

export default Favorites;
