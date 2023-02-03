import { useEffect, useState } from 'react'
import store from './store'
import Counter from './components/count'

function App() {

  useEffect(() => {
    console.log(store)
  }, [])
  
  return (
    <Counter/>
  )
}

export default App
