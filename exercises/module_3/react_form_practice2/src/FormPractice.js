import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            dietaryRestrictions: {
              isVegan: false,
              isKosher: false,
              isLactoseFree: false
            }
          };
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === 'checkbox'
          ? this.setState(prevState => {
              return {
                dietaryRestrictions: {
                  ...prevState.dietaryRestrictions,
                  [name]: checked
                }
              };
            })
          : this.setState({
              [name]: value
            });
      }
    
    
    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" name='firstName' onChange={this.handleChange} /><br />
                    <input placeholder="Last Name" name='lastName' onChange={this.handleChange} /><br />
                    <input placeholder="Age" name='age' onChange={this.handleChange}/><br />
                    
                    <label > Male
                        <input type="radio" name="gender" value ='male' onChange={this.handleChange} checked = {this.state.gender === 'male'}/>
                    </label> 

                    <label > Female
                        <input type="radio" name="gender" value ='female'  onChange={this.handleChange} checked = {this.state.gender === 'female'}/>
                    </label> 
                    <br />
                    <select name="destination" value={this.state.destination} onChange={this.handleChange}> 
                        <option value="Russia">Russia</option>
                        <option value="USA">USA</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Germany">Germany</option>
                    </select>
                    <br />
                    <h3>Do you have any food restrictions?</h3>
                    
                    <label >
                        <input type="checkbox" name="isKosher" onChange={this.handleChange} checked={this.state.dietaryRestrictions.isKosher} /> Kosher ?
                    </label>
                    <label >
                        <input type="checkbox" name="isLactoseFree" onChange={this.handleChange} checked={this.state.dietaryRestrictions.isLactoseFree} /> Lactose Free ?
                    </label>
                    <label >
                        <input type="checkbox" name="isVegan" onChange={this.handleChange} checked={this.state.dietaryRestrictions.isVegan} /> Vegan ?
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p> Your food restrictions are: Vegan:{' '}
                    {this.state.dietaryRestrictions.isVegan ? 'Yes' : 'NO'}, 
                    Kosher: {' '} {this.state.dietaryRestrictions.isKosher ? 'Yes' : 'NO'},
                    Lactose Free:{' '}
                    {this.state.dietaryRestrictions.isLactoseFree ? 'Yes' : 'NO'}
                </p>
            </main>
        )
    }
}

export default App
