import React from 'react'
import { render } from 'react-dom'

const App = () => {
  return 'hello'
}

const root = document.getElementById('app')

render(<App />, root)
