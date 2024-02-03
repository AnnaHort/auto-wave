import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import {
  FooterContainer,
  FooterContainerSocialMedia,
  FooterFaceBoock,
  FooterInstagram,
  FooterTitleSocialMedia,
  FooterYoutube,
} from './Footer.styled';
const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterTitleSocialMedia>Social media</FooterTitleSocialMedia>
        <FooterContainerSocialMedia>
          <FooterInstagram />
          <FooterFaceBoock />
          <FooterYoutube />
        </FooterContainerSocialMedia>
      </div>
      <div></div>
    </FooterContainer>
  );
};

export default Footer;
