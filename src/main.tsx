import React from 'react'
import ReactDOM from 'react-dom/client'


// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHool } from './01-useState/CounterWithCustomHool'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterWithCustomHool />
  </React.StrictMode>,
)
