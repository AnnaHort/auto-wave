import React from 'react';
import {
  FooterContainer,
  FooterContainerSocialMedia,
  FooterFaceBoock,
  FooterInstagram,
  FooterScrollContainer,
  FooterTextBrands,
  FooterTitleSocialMedia,
  FooterYoutube,
} from './Footer.styled';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleScrollBrands = () => {
    window.scrollTo({
      top: 200,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollPropositions = () => {
    window.scrollTo({
      top: 1200,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollLocation = () => {
    window.scrollTo({
      top: 1800,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterContainer>
      <div>
        <FooterTitleSocialMedia>Social media</FooterTitleSocialMedia>
        <FooterContainerSocialMedia>
          <Link to="https://www.instagram.com/" target="_blank">
            <FooterInstagram />
          </Link>
          <Link to="https://www.facebook.com/?locale=uk_UA" target="_blank">
            <FooterFaceBoock />
          </Link>
          <Link to="https://www.youtube.com/" target="_blank">
            <FooterYoutube />
          </Link>
        </FooterContainerSocialMedia>
      </div>
      <FooterScrollContainer>
        <FooterTextBrands onClick={handleScrollBrands}>Brands</FooterTextBrands>
        <FooterTextBrands onClick={handleScrollPropositions}>
          Propositions
        </FooterTextBrands>
        <FooterTextBrands onClick={handleScrollLocation}>
          Location
        </FooterTextBrands>
      </FooterScrollContainer>
    </FooterContainer>
  );
};

export default Footer;
