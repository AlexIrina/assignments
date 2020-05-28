import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <MainGridContainer>
      <Header />
      <Main />
      <Footer />
    </MainGridContainer>
  );
}

export default App;

const MainGridContainer = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns:
        /* space on left side */
      minmax(1em, 1fr)
      /* 3 columns */
      repeat(2, minmax(15rem, 35rem))
      minmax(5rem, 10rem)
      /* space on right side */
      minmax(1em, 1fr);
    gap: 2em;
    position: relative;
  }
`;

// sub-grid is whatever is inside header, main, footer
// only supported in firefox
