import React from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import articlesData from './data/blogData';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <BlogList data={articlesData} />
      <Footer />
    </div>
  );
}

export default App;
