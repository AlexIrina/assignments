import React,{Component} from 'react'

// Build a simple react app with 2 input boxes, an <h1>, a button, and an ordered list. The user will type names into the input boxes.

// When the user types in the input box, the <h1> should update to show the same text as in the input box.

// When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered. (Hint: you'll need to set state and map over an array to do this).

class App extends Component{
  constructor(){
    super()
      this.state = {
        firstName: '',
        lastName: '',
        // storing first and last name into an array to map over later
        enteredInformation: []
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }


  // // this allows me to type in the input field and display in the h1
  // handleChange = (event) => {
  //   //name is the thing in state that im updating. 
  //   //Value is what typing in
  //   const {name, value} = event.target;
  //   // console.log(`Name: ${name}`, `Value: ${value}`)
  //   // now im setting the value to name
  //   // putting name in brackets allows me to store value in state
  //   // console.log({[name]: value})
  //   this.setState({[name]: value})
  // }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  //  handleSubmit(e){
  //   e.preventDefault()
  //   const {firstName, lastName} = this.state
  //   this.setState(prevState => {
  //     return {
  //       // clears values
  //       firstName: '',
  //       lastName: '',
  //       // stores/pushes values i typed in to enteredInformation array in state
  //       // ....prevState.enteredInformation lets the user see the previous names they entered
  //       enteredInformation: [...prevState.enteredInformation, {firstName, lastName}]
  //     }
  //   })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    const {firstName, lastName} = this.state
    this.setState(prevState => {
      return {
        firstName: '',
        lastName: '',
        enteredInformation: [...prevState.enteredInformation, {firstName, lastName}]
      }
    })
  }

  render(){
    //adding whats in entered Information to the lis
    const names = this.state.enteredInformation.map((name, key) => {
        return (
          <>
            <li key={key}>{name.firstName} {name.lastName}</li>
          </>
        )
    })

    return(
      <main className='container'>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.firstName}</h1>
          <h1>{this.state.lastName}</h1>

          <input type="text" placeholder='first name' value={this.state.firstName} name='firstName' onChange={this.handleChange}/>
          <input type="text" placeholder='last name' value={this.state.lastName} name='lastName' onChange={this.handleChange}/>

          <br/>

          <h2>Entered Information</h2>
          <ol className='usersNames'>Collection of names{names}</ol>

          <button>Submit form</button>
        </form>
      </main>
    )
  }
}

export default App
