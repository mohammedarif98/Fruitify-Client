import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-6xl text-red-700'>
          <p className="text-green-600">
            Click on the Vite and React logos to learn more
          </p>
      </div>
    </>
  )
}


export default App;
