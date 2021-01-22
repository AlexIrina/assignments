import {useEffect} from 'react'

export default function HitList({targets, setTargets}) {

  useEffect(() => {
      fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
      .then(response => response.json())
      .then(data => {
        setTargets(data)
      })
    })
  

  const targetsInfo = targets.map((target, index) =>(
    <div key={index} className='target-container' id='target-container'>
     <div className="target" style={{backgroundColor: (222,253,224)}}>

     <div className="img-container">
        <img src={target.image} alt="targets img"/>
     </div>

     <div className="info">
       <h3 className="name">{target.name}</h3> 
     </div>

     </div>
    </div>
  ))  

  return (
   <>
     {targetsInfo}
   </>
  )
}
