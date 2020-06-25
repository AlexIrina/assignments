import React from 'react';

const BlogCard = (props) => {
  return (
    <>
      <div className='card-header'>
        <img src={props.logoImg} alt='react' />
      </div>
      <div className='card-body'>
        <button style={props.btnColor}>{props.btnTxt}</button>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className='user'>
        <img src={props.author} alt='person' />
        <div className='user-info'>
          <h5>{props.name}</h5>
          <small>{props.time}</small>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
