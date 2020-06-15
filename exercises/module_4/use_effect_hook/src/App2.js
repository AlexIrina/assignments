import React, { useState, useEffect } from 'react';

const App2 = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  // [] <== whenever values inside change then you want to do something

  // // when app renders
  // console.log('rendered');

  //////////////////////// // only runs if resourceType changes
  useEffect(() => {
    // runs resourceType when it re renders
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  //////////////////////// runs only when it mounts. When the page loads or refreshes
  // useEffect(() => {
  //   console.log('on mount');
  // }, []);

  return (
    <>
      <div className='container'>
        <button
          onClick={() => {
            setResourceType('posts');
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType('users');
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType('comments');
          }}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
      <div>
        {items.map((item, key) => {
          return <pre key={key}>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </>
  );
};

export default App2;
