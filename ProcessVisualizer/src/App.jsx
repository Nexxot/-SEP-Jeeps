import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div class="parent">
          <div class="headnotes">1 </div> 
          <div class="views">2 </div>
          <div class="processes">3 </div>
          <div class="meta"> 4</div>
          <div class="processmap">5 </div>
      </div>
  );
}

export default App
