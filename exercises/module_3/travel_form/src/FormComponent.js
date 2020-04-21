import React from 'react';

function FormComponent(props) {
  return (
    <div>
      <form className='form'>
        {' '}
        <h1>Please complete all of the information below</h1>
        <hr />
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={props.data.firstName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={props.data.lastName}
          onChange={props.handleChange}
        />
        <br />
        <label>How old are you{props.data.firstName}?</label>
        <br />
        <input
          type='number'
          name='age'
          value={props.data.age}
          onChange={props.handleChange}
        />
        <br />
        <label>Please select your gender</label>
        <br />
        <label>Select your gender:</label>
        <br />
        <input
          type='radio'
          name='gender'
          value='male'
          checked={props.data.gender === 'male'}
          onChange={props.handleChange}
        />{' '}
        Male
        <br />
        <input
          type='radio'
          name='gender'
          value='female'
          checked={props.data.gender === 'female'}
          onChange={props.handleChange}
        />{' '}
        Female
        <br />
        {/* destination */}
        <label> Flying to:</label>
        <br />
        <select
          name='destination'
          value={props.data.destination}
          onChange={props.handleChange}
        >
          <option value='Moscow'>Moscow</option>
          <option value='New York'>New York</option>
          <option value='California'>California</option>
        </select>
        <br />
        {/* food restrictions */}
        <label>Are you allergic to anything?</label>
        <br />
        <label>
          <input
            type='checkbox'
            name='isVegan'
            checked={props.data.isVegan}
            onChange={props.handleChange}
          />
        </label>{' '}
        Vegan?
        <br />
        <label>
          <input
            type='checkbox'
            name='isKosher'
            checked={props.data.isKosher}
            onChange={props.handleChange}
          />
        </label>{' '}
        Kosher?
        <br />
        <label>
          <input
            type='checkbox'
            name='isLactoseFree'
            checked={props.data.isLactoseFree}
            onChange={props.handleChange}
          />
        </label>{' '}
        Lactose?
        <br />
        <button onClick={props.handleChange}>Submit</button>
      </form>
      <div className='result-container'>
        <h1>
          Your Name is {props.data.firstName} {props.data.lastName}
        </h1>
        <p>You are {props.data.age} years old</p>
        <p>Your gender is {props.data.gender}</p>
        <p>You are flying to {props.data.destination}</p>
        <p>You have food allergies to</p>
        <p>vegan:{props.data.isVegan ? 'yes' : 'no'}</p>
        <p> kosher: {props.data.isKosher ? 'yes' : 'no'}</p>
        <p>LactoseFree: {props.data.isLactoseFree ? 'yes' : 'no'}</p>
      </div>
    </div>
  );
}

export default FormComponent;
