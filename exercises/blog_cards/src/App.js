import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import User from './components/User';
// import BlogCard from './BlogCard';

const App = () => {
  return (
    <div className='container'>
      <div className='card'>
        <Header />
        <Body />
        <User />
      </div>
      <div className='card'>
        <Header />
        <Body />
        <User />
      </div>
      <div className='card'>
        <Header />
        <Body />
        <User />
      </div>
    </div>

    // // refactoring
    // <div className='container'>
    //   <div className='card'>
    //     <BlogCard />
    //     <BlogCard />
    //     <BlogCard />
    //   </div>
    // </div>
  );
};

export default App;
