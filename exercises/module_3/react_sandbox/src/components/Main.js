import React from 'react';

function Main(props) {
  return (
    <main className='main-container'>
      <div className='about-me'>
        <h3 className='main-header'>About me</h3>
        <p className='main-paragraph'>
          Hello! My name is Alex George. I am going to VSchool to learn the
          skills to become an awesome programmer so i can work for as a software
          engineer and so i can pursue my passion. My passion is to teach
          underprivileged kids all over Russia to code.
        </p>
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
