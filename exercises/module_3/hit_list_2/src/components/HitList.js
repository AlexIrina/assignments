import Target from './Target'
export default function HitList({targets}) {
  return (
   <>
     {targets.map((target, index) => {
       return (
         <Target 
            key={index} 
            target={target}
            />
       )
     })}
   </>
  )
}
