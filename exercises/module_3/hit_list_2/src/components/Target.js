import React from 'react'

export default function Target({target}) {
  return (
        <div className="target" style={{backgroundColor: (222,253,224)}}>

          <div className="img-container">  
              <img src={target.image} alt="targets img"/>
          </div>

          <div className="info">
            <h3 className="name">{target.name}</h3> 
          </div>

      </div>
  )
}
