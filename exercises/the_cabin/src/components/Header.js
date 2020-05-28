import React from 'react';
import logo from '../img/wave2.svg';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <Container>
      <Image src={logo} alt='Companies Logo' />
      <Nav>
        <NavLink href='/'>Contact</NavLink>
        <NavLink href='/'>About</NavLink>
        <NavLink href='/'>Add guests</NavLink>
        <NavLink href='/'>Add dates</NavLink>
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  margin: 2em 0;
  @media (min-width: 800px) {
    grid-column: 2/5;
    display: grid;
    grid-template-columns: subgrid;
  }
`;
const Nav = styled.nav`
  /* outline: 2px solid red; */
  /* enables the links to go to the end of the screen */
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  @media (min-width: 800px) {
    grid-column: 2/5;
  }
  @media (min-width: 1200px) {
    grid-column: 2/3;
  }
`;

const NavLink = styled.a`
  color: var(--clr-text);
  text-transform: capitalize;
  text-decoration: none;
  :hover,
  :focus {
    color: var(--clr-accent);
  }
`;

const Image = styled.img`
  /* so images stay on the page */
  max-width: 100%;
`;

export default Header;
