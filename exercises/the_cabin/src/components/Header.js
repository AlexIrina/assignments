import React from 'react';
import logo from '../img/TB.svg';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <Container>
      <img className='logo' src={logo} alt='Companies Logo' />
      <Nav className='nav'>
        <a href='/' className='navLink'>
          Contact
        </a>
        <a href='/' className='navLink'>
          About
        </a>
        <a href='/' className='navLink'>
          Add guests
        </a>
        <a href='/' className='navLink'>
          Add dates
        </a>
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

// const NavLink = styled.navLink``;

export default Header;
