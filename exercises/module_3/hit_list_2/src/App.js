import {useState} from 'react'
import HitList from './components/HitList'

export default function App() {

  const [targets, setTargets] = useState([])


  return (
    <div>
      <h1>Hit List</h1>
      <HitList
        targets = {targets}
        setTargets = {setTargets}
      />

    </div>
  )
}
