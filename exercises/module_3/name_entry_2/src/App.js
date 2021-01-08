import React,{Component} from 'react'

// Build a simple react app with an input box, an <h1>, a button, and an ordered list. The user will type names into the input box.

// When the user types in the input box, the <h1> should update to show the same text as the input box.

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

  // handleChange
  handleChange = event =>{
    const {name, value} = event.target
    this.setState({[name]: value})
  }


  // handleSubmit
  handleSubmit(e){
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
    const names = this.state.enteredInformation.map((name, i) => {
      return (
        <li key={i}>{name.firstName} {name.lastName} </li>
      )
    })

    return(
      <main className='container'>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.firstName}</h1>
          <h1>{this.state.lastName}</h1>
       
          <input type="text" placeholder='First name' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
          <input type="text" placeholder='Last name' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
          <br/>

          <h2>Entered Information</h2>
          <ol className='usersNames'>{names}</ol>

          <button>Submit form</button>
        </form>
      </main>
    )
  }
}

export default App
