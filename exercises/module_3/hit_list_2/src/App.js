import {useState} from 'react'
import HitList from './components/HitList'

export default function App() {

  const [targets, setTargets] = useState([])

  return (
    <>
      <HitList
        targets = {targets}
        setTargets = {setTargets}

      />
    </>
  )
}
