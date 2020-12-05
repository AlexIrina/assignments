import React from 'react'

export default function Square(props) {
  console.log(props);

  return (
    <div className='square' style={{backgroundColor: props.colors}}> 
    </div>
  )
}
