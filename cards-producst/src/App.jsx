import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import './App.css'

const App = () => {

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const api_key = "F2s1LfUMqP6fY5FwsaRKOEwRKCkdMiuIKGR9Np80"

    axios.get("/dev/api/products", {
      headers: {
        'X-Api-Key': api_key
      },
    }).then((response) => {
      setProduct(response.data)
      setLoading(false)
    }).catch((error) => {
      setError(error.message)
      setLoading(false)
    })
  }, [])
  
  
  if (loading) return <div>Cargando... </div>
  
  if (error) return <div>Error: {error}</div>
  
  console.log(product)

  return (
    <>
      <div className="App">
        {product && product.map((p, index) => <ProductCard product={p} key={index}/>)}
      </div>
    </>
  )
}
  
export default App
