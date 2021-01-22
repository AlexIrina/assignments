import React from 'react'



const colors = [
'#E2BF65',
'#B6A136',
 '#D685AD',
'#A33EA1',
 '#A6B91A',
 '#6F35FC',
 '#F95587',
 '#A98FF3',
 '#C22E28',
'#A8A77A',
'#EE8130',
'#6390F0',
 '#F7D02C',
 '#96D9D6',
 '#7AC74C', 
 '#735797',
'#705746',
'#B7B7CE'
]

// 
function random_color(){
  let output = ''
  let random = colors[Math.floor(Math.random() * colors.length)]
  output += random
  return output

}


export default function Target({target}) {

  return (
        <div className="target" style={{backgroundColor: random_color} }>

          <div className="img-container">  
              <img src={target.image} alt="targets img"/>
          </div>

          <div className="info">
            <h3 className="name">{target.name}</h3> 
          </div>

      </div>
  )
}
