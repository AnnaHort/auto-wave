import React, { useState } from 'react';
import { useSpring, a, animated } from '@react-spring/web';
import {
  AboutUsCalendarSvg,
  AboutUsMoneySvg,
  AboutUsSearchSvg,
  ListItemStyled,
  ListStyled,
  TextStyled,
  // TextStyled,
  TitleTextStyled,
} from './AboutUsComponent.styled';
import styles from './styles.module.css';

const AboutUsComponent = () => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <>
      {/* <div className={styles.container} onClick={() => setFlipped(state => !state)}>
        <a.div
          className={`${styles.c} ${styles.back}`}
          style={{ opacity: opacity.to(o => 1 - o), transform }}
        />
        <a.div
          className={`${styles.c} ${styles.front}`}
          style={{
            opacity,
            transform,
            rotateX: '180deg',
          }}
        />
      </div> */}

      {/* <div
        className={styles.container}
        onClick={() => setFlipped(state => !state)}
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
      </div> */}

      <ListStyled>
        <li onClick={() => setFlipped(state => !state)}>
          <a.div  className={`${styles.c} ${styles.back}`}
          style={{ opacity: opacity.to(o => 1 - o), transform }}>
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
        </li>

        <ListItemStyled>
          <AboutUsSearchSvg />

          <TitleTextStyled>No Hidden Fees</TitleTextStyled>
          {/* <TextStyled>Know exactly what you're paying for.</TextStyled> */}
        </ListItemStyled>

        <ListItemStyled>
          <AboutUsMoneySvg />

          <TitleTextStyled>Price Match Guarantee</TitleTextStyled>

          {/* <TextStyled>
            Found the same offer for a lower price? We'll refund the difference.
          </TextStyled> */}
        </ListItemStyled>
      </ListStyled>
    </>
  );
};

export default AboutUsComponent;
