import React from 'react';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import Articles from './data/blogData';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <BlogList data={Articles} />
      <Footer />
    </div>
  );
}

export default App;
