import React from 'react';
import BlogPost from './BlogPost.js';

export default function BlogList(props) {
  const mappedArticle = props.data.map((item, key) => (
    <BlogPost
      title={item.title}
      subtitle={item.subtitle}
      author={item.author}
      date={item.date}
      key={key}
    />
  ));

  return (
    <div className='blog-list-container'>
      {mappedArticle}
      <div className='older-posts'>
        <button href='.'>Older Posts →</button>
      </div>
      <hr />
    </div>
  );
};


