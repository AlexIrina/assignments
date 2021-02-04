import React, {Component} from 'react'

class App2 extends Component {
  constructor(){
    super()
    this.state = {
      color: '',
      targets: []
    }
  }


  render(){
    return (
      <>
      {targets.map((target, index) => {

        return (
          <div className="target" style={{backgroundColor: bgColor}}>

          <div className="img-container">  
              <img src={target.image} alt="targets img"/>
          </div>
          
          <div className="info">
            <h3 className="name">{target.name}</h3> 
          </div>
         </div>
        )
      })}
    </>
    )
  }
}

export default App2