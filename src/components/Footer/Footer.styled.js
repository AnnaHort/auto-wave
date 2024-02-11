import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0px;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const FooterTitleSocialMedia = styled.h3`
  margin-bottom: 12px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: start;
  }
`;

export const FooterContainerSocialMedia = styled.div`
  display: flex;
  gap: 36px;
`;

export const FooterInstagram = styled(FaInstagram)`
  width: 24px;
  height: 24px;
  background-color: var(--color-primary-blue);
  border-radius: 50%;
  padding: 4px;
  &:hover {
    background-color: var(--color-primary-blue-2);
    transition: background-color 0.3s cubic-bezier(0.39, 0.4, 0.77, 0.74);
  }
  fill: var(--color-primary-white);
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const FooterFaceBoock = styled(FaFacebookF)`
  width: 24px;
  height: 24px;
  background-color: var(--color-primary-blue);
  border-radius: 50%;
  padding: 4px;
  &:hover {
    background-color: var(--color-primary-blue-2);
    transition: background-color 0.3s cubic-bezier(0.39, 0.4, 0.77, 0.74);
  }
  fill: var(--color-primary-white);
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const FooterYoutube = styled(FaYoutube)`
  width: 24px;
  height: 24px;
  background-color: var(--color-primary-blue);
  border-radius: 50%;
  padding: 4px;
  &:hover {
    background-color: var(--color-primary-blue-2);
    transition: background-color 0.3s cubic-bezier(0.39, 0.4, 0.77, 0.74);
  }
  fill: var(--color-primary-white);
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const FooterScrollContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    gap: 36px;
    cursor: pointer;
  }
`;

export const FooterTextBrands = styled.p`
  font-size: 20px;
  &:hover {
    color: var(--color-primary-blue-2);
    transition: color 3ms cubic-bezier(0.39, 0.4, 0.77, 0.74);
  }
`;
