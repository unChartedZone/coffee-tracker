import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  gap: 0.75rem;
  color: var(--dark-gray);
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  color: var(--dark-gray);
  text-decoration: none;

  &:hover {
    color: var(--black);
  }
`;

const Footer = () => {
  const date = new Date();

  return (
    <FooterStyled>
      <Link href="https://chrisvaldez.dev">Christian Valdez</Link>
      <p>&middot;</p>
      <p>{date.getFullYear()}</p>
    </FooterStyled>
  );
};

export default Footer;
