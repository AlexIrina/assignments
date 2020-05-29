import React, { useState } from 'react';

function Form() {
  const [inputData, setInputData] = useState({ firstName: '', lastName: '' });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setContactsData((prevContacts) => [...prevContacts, inputData]);
  }

  // shows added contacts
  const contacts = contactsData.map((contact, key) => (
    <h2 key={key}>
      {contact.firstName} {contact.lastName}
    </h2>
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
        <button>Add contact</button>
      </form>
      {contacts}
    </>
  );
}

export default Form;
