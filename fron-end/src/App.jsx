import { useState } from 'react'
import './App.css'
import { RoutesBlog } from './routing/RoutesBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>

      <RoutesBlog />

    </div>
  )
}

export default App
