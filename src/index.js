import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

const App = () => {
  const [state, setState] = useState({ count: 1 })

  return (
    <div>
      <span>{state.count}</span>
      <button onClick={() => setState({ count: state.count + 1 })}>
        {'count up'}
      </button>
    </div>
  )
}

const root = document.getElementById('app')
render(<App />, root)
