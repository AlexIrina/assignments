import React from 'react';
import BlogCard from './BlogCard';
import reactLogo from './images/react.png';
import jsLogo from './images/js.png';
import nodeLogo from './images/node.png';
import author from './images/alex.jpg';

const App = () => {
  const teal = { backgroundColor: '#61dafb' };
  const yellow = { backgroundColor: '#f7df1e' };
  const green = { backgroundColor: '#72aa62' };
  return (
    <div className='container'>
      <div className='card'>
        <BlogCard
          logoImg={reactLogo}
          btnTxt='React'
            btnColor={teal}
          title='What is React?'
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
          btnColor={yellow}
          title='What is Javascript?'
          description='JavaScript is a scripting or programming language that allows you to implement complex features on web pages.'
          author={author}
          name='Alex George'
          time='2hrs ago'
        />
      </div>
      <div className='card'>
        <BlogCard
          logoImg={nodeLogo}
          btnTxt='Node.js'
          btnColor={green}
          title='What is Node.js?'
          description='As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications'
          author={author}
          name='Alex George'
          time='2hrs ago'
        />
      </div>
    </div>
  );
};



export default App;
