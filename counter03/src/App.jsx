import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-red-200 text-black'>Tailwind Testing</h1>
    <Card />
    <Card />

    </>
  )
}

export default App
