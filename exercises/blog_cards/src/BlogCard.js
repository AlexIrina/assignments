import React from 'react';

const BlogCard = () => {
  return (
    <>
      <div className='card-header'>
        <img src alt='react' />
      </div>
      <div className='card-body'>
        <button className='tag tag-teal'>React</button>
        <h4>What is React?</h4>
        <p>React is a JavaScript library for building user interfaces</p>
      </div>
      <div className='user'>
        <img src alt='person' />
        <div className='user-info'>
          <h5>Alex George</h5>
          <small>2hrs ago</small>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
