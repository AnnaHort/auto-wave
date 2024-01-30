import React, { useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import {
  AboutUsCalendarSvg,
  AboutUsMoneySvg,
  AboutUsSearchSvg,
  ListElementStyled,
  ListStyled,
  TextStyled,
  TitleTextStyled,
} from './AboutUsComponent.styled';
import styles from './styles.module.css';

const AboutUsComponent = () => {
  const [flipped, setFlipped] = useState(false);
  const [flippedSearch, setFlippedSearch] = useState(false);
  const [flippedPrice, setFlippedPrice] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const { transform: transformSearch, opacity: opacitySearch } = useSpring({
    opacity: flippedSearch ? 1 : 0,
    transform: `perspective(600px) rotateX(${flippedSearch ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const { transform: transformPrice, opacity: opacityPrice } = useSpring({
    opacity: flippedPrice ? 1 : 0,
    transform: `perspective(600px) rotateX(${flippedPrice ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <>
      <ListStyled>
        <ListElementStyled
          onClick={() => setFlipped(state => !state)}
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
        >
          <a.div
            className={`${styles.c} ${styles.back}`}
            style={{ opacity: opacity.to(o => 1 - o), transform }}
          >
            <AboutUsCalendarSvg />
            <TitleTextStyled>Flexible & comfortable Rental</TitleTextStyled>
          </a.div>

          <a.div
            className={`${styles.c} ${styles.front}`}
            style={{
              opacity,
              transform,
              rotateX: '180deg',
            }}
          >
            <TextStyled>
              Cancel or change most bookings for free up to 48 hours before
              pickup.
            </TextStyled>
          </a.div>
        </ListElementStyled>

        <ListElementStyled
          onClick={() => setFlippedSearch(state => !state)}
          onMouseEnter={() => setFlippedSearch(true)}
          onMouseLeave={() => setFlippedSearch(false)}
        >
          <a.div
            className={`${styles.c} ${styles.back}`}
            style={{
              opacity: opacitySearch.to(o => 1 - o),
              transform: transformSearch,
            }}
          >
            <AboutUsSearchSvg />
            <TitleTextStyled>No Hidden Fees</TitleTextStyled>
          </a.div>
          <a.div
            className={`${styles.c} ${styles.front}`}
            style={{
              opacity: opacitySearch,
              transform: transformSearch,
              rotateX: '180deg',
            }}
          >
            <TextStyled>Know exactly what you're paying for.</TextStyled>
          </a.div>
        </ListElementStyled>

        <ListElementStyled
          onClick={() => setFlippedPrice(state => !state)}
          onMouseEnter={() => setFlippedPrice(true)}
          onMouseLeave={() => setFlippedPrice(false)}
        >
          <a.div
            className={`${styles.c} ${styles.back}`}
            style={{
              opacity: opacityPrice.to(o => 1 - o),
              transform: transformPrice,
            }}
          >
            <AboutUsMoneySvg />

            <TitleTextStyled>Price match guarantee</TitleTextStyled>
          </a.div>
          <a.div
            className={`${styles.c} ${styles.front}`}
            style={{
              opacity: opacityPrice,
              transform: transformPrice,
              rotateX: '180deg',
            }}
          >
            <TextStyled>
              Found the same offer for a lower price? We'll refund the
              difference.
            </TextStyled>
          </a.div>
        </ListElementStyled>
      </ListStyled>
    </>
  );
};

export default AboutUsComponent;
