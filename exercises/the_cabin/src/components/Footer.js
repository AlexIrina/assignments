import React from 'react';
import instagram from '../img/instagram.svg';
import snapchat from '../img/snapchat-ghost.svg';
import airbnb from '../img/airbnb.svg';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <SocialMediaLinks>
        <SocialLink href='/' area-label=''>
          <SocialImage src={snapchat} alt='' />
        </SocialLink>
        <SocialLink href='/' area-label=''>
          <SocialImage src={instagram} alt='' />
        </SocialLink>
        <SocialLink href='/' area-label=''>
          <SocialImage src={airbnb} alt='' />
        </SocialLink>
      </SocialMediaLinks>
    </Container>
  );
};

export default Footer;

const SocialImage = styled.img`
  /* so images stay on the page */
  max-width: 100%;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 2em;
`;
const SocialLink = styled.a`
  :hover,
  :focus {
    opacity: 0.5;
  }
`;

const Container = styled.footer`
  margin-top: 2em;

  @media (min-width: 800px) {
    grid-column: 2/3;
  }
`;
