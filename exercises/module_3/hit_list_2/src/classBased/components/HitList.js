
import Target from './Target'
clas Hitlist extends Component{
  
}
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
