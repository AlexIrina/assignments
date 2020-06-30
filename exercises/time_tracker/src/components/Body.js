import React from 'react';

const Body = (props) => {
  return (
    <>
      <div className='card-body'>
        <h2>{props.date}</h2>
        <h1>{props.dash}</h1>
        <h3>{props.time}</h3>
        <p>{props.description}</p>
        <br />
        <br />
        <h2>{props.totalTime}</h2>
        <h4>
          WORKED: {props.totalWorkingHrsMins} PERSONAL TIME/BREAKS:{' '}
          {props.totalPersonalTime}
        </h4>
      </div>
    </>
  );
};

export default Body;
