import React from 'react'

export default function Spot(props) {
  

 const season = props.location.timeToGo;

 const styles = {}

  if (season === 'Winter') {
    styles.color = "grey"
  } else if (season === 'Spring') {
    styles.color = "orange"
  } else if (season === 'Fall') {
    styles.color = "red"
  } else if (season === 'Summer') {
    styles.color = "green"
  } else {
    styles.color = "black"
  }


  const cardStyles = {
    outline: '2px solid red',
    width: '300px',
    padding: '1rem',
    backgroundColor: 'black',
    margin: 'auto'
  }




 // Give each card 1, 2, or 3 dollar signs ($) depending on if it's less than $500, less than $1000, or more than $1000
  const amount = props.location.price;
  let stars = '';
  if(amount <= 500){
    stars = '🌟' 
  }else if(amount >500 && amount <=1000){
    stars = '🌟 🌟'  
  }else {
    stars = '🌟 🌟 🌟' 
  }
 

  return (
    <div style={styles}>
      <div style={cardStyles}>
      <h1>Place: {props.location.place}</h1>
      <span>{stars}</span>
      <h2>Price: {props.location.price}</h2>
      <h3 >Time To Go: {props.location.timeToGo}</h3>
      </div>
    </div>
  )
}



