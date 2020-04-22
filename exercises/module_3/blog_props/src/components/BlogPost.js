import React from 'react';

const BlogPost = (props) => {
  return (
    <div>
      <div className='post-container'>
        <a href='post.html'>
          <h2 className='post-title'>{props.title}</h2>
          <h3 className='post-subtitle'>{props.subtitle}</h3>
        </a>
        <p className='post-author'>
          Posted by
          <a href='.'>{props.author}</a>
          on {props.date}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default BlogPost;
