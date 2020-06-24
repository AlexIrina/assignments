import React from 'react';
// import Header from './components/Header';
// import Body from './components/Body';
// import User from './components/User';
import BlogCard from './BlogCard';
import reactLogo from './images/react.png';
import jsLogo from './images/js.png';
import author from './images/alex.jpg';

const App = () => {
  return (
    // <div className='container'>
    //   <div className='card'>
    //     <Header />
    //     <Body />
    //     <User />
    //   </div>
    //   <div className='card'>
    //     <Header />
    //     <Body />
    //     <User />
    //   </div>
    //   <div className='card'>
    //     <Header />
    //     <Body />
    //     <User />
    //   </div>
    // </div>

    // refactoring
    <div className='container'>
      <div className='card'>
        <BlogCard
          logoImg={reactLogo}
          btnTxt='React'
          title='What is React'
          description='React is a JavaScript library for building user interfaces'
          author={author}
          name='Alex George'
          time='2hrs ago'
        />
      </div>
      <div className='card'>
        <BlogCard
          logoImg={jsLogo}
          btnTxt='Javascript'
          title='What is Javascript'
          description='JavaScript is a scripting or programming language that allows you to implement complex features on web pages.'
          author={author}
          name='Alex George'
          time='2hrs ago'
        />
      </div>
      <div className='card'>
        <BlogCard
          logoImg
          btnTxt='React'
          title='What is React'
          description='React is a JavaScript library for building user interfaces'
          author={author}
          name='Alex George'
          time='2hrs ago'
        />
      </div>
    </div>
  );
};

export default App;
