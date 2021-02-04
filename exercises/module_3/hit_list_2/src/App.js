import {useState, useEffect} from 'react'
import HitList from './components/HitList'

export default function App() {

  const [targets, setTargets] = useState([])

  useEffect(() => {
    console.log('render hitlist');

      fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTargets(data)
      })
    }, [setTargets])
  

  return (
    <>
      <HitList
        targets = {targets}
      />

    </>
  )
}
