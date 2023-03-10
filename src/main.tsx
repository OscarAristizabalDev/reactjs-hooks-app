import React from 'react'
import ReactDOM from 'react-dom/client'


// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHool } from './01-useState/CounterWithCustomHool'
// import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-UseLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
