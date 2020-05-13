import React from 'react';

import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='bg1'>
        <h2>
          <i class='far fa-list-alt'></i>
          <br />
          16 <span>| 24</span>
        </h2>
        <p>Goals Completed</p>
      </div>
      <div className='bg1'>
        <h2>
          <i class='far fa-heart'></i>
          <br />
          60 <span>bpm</span>
        </h2>
        <p>Resting HR</p>
      </div>
      <div className='bg2'>
        <h2>
          <i className='fas fa-running'></i>
          <br />
          15 <span>miles</span>
        </h2>
        <p>Distance</p>
      </div>
      <div className='bg1'>
        <h2>
          <i class='fas fa-fire'></i>
          <br />
          200 <span>kcal</span>
        </h2>
        <p>Calories Burned</p>
      </div>
      <div className='bg1'>
        <h2>
          <i class='fas fa-moon'></i>
          <br />9 hrs
        </h2>
        <p>Sleep Quality</p>
      </div>
      <div className='bg2'>
        <h2>
          <i className='fas fa-heart'></i>{' '}
          <i class='fas fa-long-arrow-alt-up'></i>
          <br />
          140 <span>bpm</span>
        </h2>
        <p>Max HR</p>
      </div>
      <div className='bg1'>
        <h2>
          <i class='fas fa-weight'></i>
          <br />
          170 <span>lbs</span>
        </h2>
        <p>Weight</p>
      </div>
      <div className='bg1'>
        <h2>
          28 <span>%</span>
        </h2>
        <p>Fat Percentage</p>
      </div>
      <div className='bg2'>
        <h2>
          <i class='fas fa-stopwatch'></i>
          <br />
          56: <span>30</span>
        </h2>
        <p>Duration</p>
      </div>
      <div className='bg2'>
        <h2>
          <i class='fas fa-drumstick-bite'></i> <br />
          680 <span>kcal</span>
        </h2>
        <p>AVG Consumption</p>
      </div>
      <div className='bg2'>
        <h2>
          <i className='fas fa-dumbbell'></i>
        </h2>
        <p>My Workouts</p>
      </div>
      <div className='bg2'>
        <h2>
          <i class='fas fa-hand-holding-water'></i>
          <br />
          85 <span>%</span>
        </h2>
        <p>Body Hydration</p>
      </div>
    </div>
  );
}

export default App;
