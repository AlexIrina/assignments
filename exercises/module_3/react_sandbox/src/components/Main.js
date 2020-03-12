import React from 'react';

function Main(props) {
  return (
    <main className='main-container'>
      <div className='about-me'>
        <h3 className='main-header'>{props.about.header}</h3>
        <p className='main-paragraph'>{props.about.content}</p>
      </div>

      <div className='dream-jobs'>
        <p>{props.dreamJob.header}</p>
        <ul>
          <li>{props.dreamJob.company1}</li>
          <li>{props.dreamJob.company2}</li>
          <li>{props.dreamJob.company3}</li>
        </ul>
      </div>

      <div className='passion'>
        <p>{props.myPassion.header}</p>
        <ul>
          <li>{props.myPassion.city1}</li>
          <li>{props.myPassion.city2}</li>
          <li>{props.myPassion.city3}</li>
        </ul>
      </div>
    </main>
  );
}

export default Main;
