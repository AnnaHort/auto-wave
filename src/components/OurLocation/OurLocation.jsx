import React from 'react';
import { OurLocationContainer, OurLocationTitle } from './OurLocation.styled';

const OurLocation = () => {
  return (
    <OurLocationContainer>
      <OurLocationTitle>Where we are</OurLocationTitle>
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.9577359600735!2d30.514477488360587!3d50.42325907204433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf1f38e4d14f%3A0xaccbb36bc90b4ee2!2z0LLRg9C7LiDQkNC90YLQvtC90L7QstC40YfQsCwgMTEyLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAyMDAw!5e0!3m2!1suk!2spl!4v1706779412076!5m2!1suk!2spl"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </OurLocationContainer>
  );
};

export default OurLocation;
