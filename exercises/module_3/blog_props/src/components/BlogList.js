import React from 'react';
import BlogPost from './BlogPost.js';

const BlogList = (props) => {
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
    <div className='container'>
      {mappedArticle}
      <a href='.'>Older Posts →</a>
      <hr />
    </div>
  );
};

export default BlogList;
