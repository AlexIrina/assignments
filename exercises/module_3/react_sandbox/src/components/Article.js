import React from 'react';

function Article() {
  return (
    <article className='article-container'>
      <div className='about-me'>
        <h3 className='article-header'>About me</h3>
        <p className='article-paragraph'>
          Hello! My name is Alex George. I am going to VSchool to learn the
          skills to become an awesome programmer so i can work for as a software
          engineer and so i can pursue my passion. My passion is to teach
          underprivileged kids all over Russia to code.
        </p>
      </div>
      <div className='dream-jobs'>
        <p>Top 3 dream Companies</p>
        <ul>
          <li>Onnit</li>
          <li>23AndMe</li>
          <li>AirBnb</li>
        </ul>
      </div>

      <div className='passion'>
        <p>Top 3 Cities</p>
        <ul>
          <li>Neya</li>
          <li>Moscow</li>
          <li>Vladivostok</li>
        </ul>
      </div>
    </article>
  );
}

export default Article;
