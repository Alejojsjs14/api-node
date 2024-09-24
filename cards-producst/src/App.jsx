import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import ProductCard from './components/ProductCard'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const productData = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
      axios 
      .get("")
    })
  }

  return (
    <>
      <div className="App">
        <ProductCard product={productData} />
      </div>
    </>
  )
}

export default App
