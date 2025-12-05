import { useState } from 'react'
import './App.css'
import Cards from './components/cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>tailwind test </h1>
      <Cards username="Tushar" btntext="visitme"/>
      <Cards />
  
    </>
  )
}

export default App
