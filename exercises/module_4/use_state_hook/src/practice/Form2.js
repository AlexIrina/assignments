import React, { useState } from 'react';

const Form2 = () => {
  const [inputData, setInputData] = useState({ firstName: '', lastName: '' });
  const [contactsData, setContactsData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInputData) => {
      return { ...prevInputData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add the inputData to the contactsData array
    setContactsData((prevContactsData) => [...prevContactsData, inputData]);
  };

  // map over
  const contacts = contactsData.map((contact, key) => (
    <h1 key={key}>
      {contact.firstName} {contact.lastName}
    </h1>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='First Name'
          name='firstName'
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          placeholder='Last Name'
          name='lastName'
          value={inputData.lastName}
          onChange={handleChange}
        />
        <br />
        <button>Add Contact</button>
      </form>
      <br />
      {contacts}
    </>
  );
};

export default Form2;
