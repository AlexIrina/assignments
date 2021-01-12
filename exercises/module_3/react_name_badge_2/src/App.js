 import React, { Component } from 'react';
 import './App.css';

 class App extends Component {
   constructor() {
     super();
     this.state = {
       firstName: '',
       lastName: '',
       email: '',
       phoneNumber: '',
       placeOfBirth: '',
       favoriteFood: '',
       aboutUserText: '',
       badges: []
     };
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
    }

   handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }


    handleSubmit(e){
    e.preventDefault()
    const newBadge = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, phoneNumber: this.state.phoneNumber, placeOfBirth: this.state.placeOfBirth, favoriteFood: this.state.favoriteFood, aboutUserText: this.state.aboutUserText} 
    console.log(newBadge)

    this.setState(prevState => {
      return {
        // clears values
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        placeOfBirth: '',
        favoriteFood: '',
        aboutUserText: '',
        // stores/pushes values i typed in to enteredInformation array in state
        // ....prevState.enteredInformation lets the user see the previous names they entered
        badges: [...prevState.badges, {newBadge}]
      }
    })
  }

   render() {
    const badge = this.state.badges.map((item, key) => {
      return (
          <div className='card' key={key}>
             <h1>Entered Information </h1>
             <h2>Your Full item : {item.firstName} {item.lastName}{' '}</h2>
             <h2>Your email: {item.email}</h2>
             <h2>Your place of birth: {item.placeOfBirth}</h2>
             <h2>Your phone number: {item.phoneNumber}</h2>
             <h2>Your favorite food is: {item.favoriteFood}</h2>
             <h2>About me: {item.aboutUserText}</h2>
           </div>
      )
  })

     return (
       <main className='container'>
         <form onSubmit={this.handleSubmit}>
           <input
             // First Name
             name='firstName'
             type='text'
             placeholder='First Name'
             value={this.state.firstName}
             onChange={this.handleChange}
           />
           <br />
           <input
             // Last Name
             name='lastName'
             type='text'
             placeholder='Last Name'
             value={this.state.lastName}
             onChange={this.handleChange}
           />
           <br />
           <input
             // Email
             name='email'
             type='text'
             placeholder='email'
             value={this.state.email}
             onChange={this.handleChange}
           />
           <br />
           <input
             // Place of Birth
             name='placeOfBirth'
             type='text'
             placeholder='place of birth'
             value={this.state.placeOfBirth}
             onChange={this.handleChange}
           />
           <br />
           <input
             // Phone number
             name='phoneNumber'
             type='number'
             placeholder='Phone number'
             value={this.state.phoneNumber}
             onChange={this.handleChange}
           />
           <br />
            <input
             // favoriteFood 
             name='favoriteFood'
             type='text'
             minLength='3'
             placeholder='favorite Food '
             value={this.state.favoriteFood}
             onChange={this.handleChange}
           />
           <br />
           {/* text area */}
           <textarea 
              name='aboutUserText' 
              value={this.state.aboutUserText} 
              minLength='3' 
              placeholder='This is the text area'
              onChange={this.handleChange} 
            />
           {/* button */}
           <button>Submit</button>
           <hr />
           {/* users info */}
           <div className='info'>{badge}</div>
           {/* <div className='usersInfo'>
             <h1>Entered Information </h1>
             <h2>Your Full Name : {this.state.firstName} {this.state.lastName}{' '}</h2>
             <h2>Your email: {this.state.email}</h2>
             <h2>Your place of birth: {this.state.placeOfBirth}</h2>
             <h2>Your phone number: {this.state.phoneNumber}</h2>
             <h2>Your favorite food is: {this.state.favoriteFood}</h2>
           </div> */}
         </form>
       </main>
     );
   }
 }
 
 export default App;
 