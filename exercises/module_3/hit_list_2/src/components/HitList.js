import {useEffect} from 'react'
import Target from './Target'
export default function HitList({targets, setTargets}) {

  useEffect(() => {
      fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
      .then(response => response.json())
      .then(data => {
        setTargets(data)
      })
    })
  
  return (
   <>
     {targets.map((target, index) => {
       return (
         <Target 
            key={index} 
            target={target}/>
       )
     })}
   </>
  )
}
