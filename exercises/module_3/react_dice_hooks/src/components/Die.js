import React from 'react'

export default function Die(props) {
  console.log(props);
  return (
    <div className='die-container'>
      <span>{props.number}</span>
    </div>
  )
}
