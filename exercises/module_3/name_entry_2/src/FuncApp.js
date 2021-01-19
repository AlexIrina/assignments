import {useState} from 'react'

export default function FuncApp() {
  const [inputs, setInputs] = useState({firstName:'', lastName: ''})

  const  [enteredInformation, setEnteredInformation] = useState([])

  const handleSubmit = (e) => {
    const {firstName, lastName} = inputs
    e.preventDefault()
    setEnteredInformation([...enteredInformation, {firstName, lastName}])
    setInputs({firstName: '', lastName: ''})
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs({[name]: value})
  }

  const names = enteredInformation.map((name, i) => {
    return (
      <>
        <li key={i}>{name.firstName} {name.lastName}</li>
      </>
    )
})



  return (
      <main className='container'>
        <form onSubmit={handleSubmit}>
          <h1>{inputs.firstName}</h1>
          <h1>{inputs.lastName}</h1>

          <input type="text" placeholder='first name' value={inputs.firstName || ''} name='firstName' onChange={handleChange}/>
          <input type="text" placeholder='last name' value={inputs.lastName || ''} name='lastName' onChange={handleChange}/>

          <br/>

          <h2>Entered Information</h2>
          
          <ol className='usersNames'>Collection of names {names}</ol>  {/* {names} */}
         

          <button>Submit form</button>
        </form>
      </main>
    )
}
