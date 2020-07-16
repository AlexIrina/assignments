import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
// import Skills from './components/Skills';
// import Work from './components/Work';
// import Contact from './components/Contact';
import './styles.css';
function App() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      {/* <Skills />
      <Work />
      <Contact /> */}
    </div>
  );
}

export default App;
