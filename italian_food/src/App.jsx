import { useState } from 'react'
import Header from './components/Header'
import Foods from './components/foods'

function App() {
  const [count, setCount] = useState(0)
  // #FFCF43 e #01ADFF
  return (
    <div className="App">
      <Header />
      <Foods />
    </div>
  )
}

export default App
