import React from 'react';
import timeRecordsData from '../timeRecordsData';

const amPm = (hour) => (hour > 12 ? 'pm' : 'am');
console.log(amPm());

const Body = () => {
  const mappedRecordsData = timeRecordsData.map((item) => {
    const hour = item.time.getHours();
    const minute = item.time.getMinutes();

    return (
      <div key={item.id}>
        <h1>
          {hour}:{minute} {amPm(hour)}
        </h1>

        <p>{item.activity}</p>
      </div>
    );
  });
  return (
    <>
      <input
        type='text'
        placeholder='what have you been doing?
      '
      />
      <div>{mappedRecordsData}</div>
    </>
  );
};

export default Body;
