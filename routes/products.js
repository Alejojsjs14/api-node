import { Router } from 'express'
import axios from 'axios'
import { MELON_URL, API_KEY_MELON, URL_ZOHO_PRODUCTS } from '../config.js'

export const routeProducts = Router()

routeProducts.get('/inventory', async (req, res) => {
  try {
    const response = await axios.get(`${MELON_URL}/logistics/inventory`, {
      headers: {
        'X-Api-Key': API_KEY_MELON
      }
    })

    res.json(response.data)
  } catch (error) {
    console.error('error al hacer la peticion: ', error)

    res.status(500).json({ message: 'error al obtener los datos del producto' })
  }
})

routeProducts.get('/zohoProducts', async (req, res) => {
  try {
    const response = await axios.get(URL_ZOHO_PRODUCTS)
    res.json(response.data.data)
  } catch (error) {
    console.error('error al hacer la peticion', error)
    return res.status(500).json({ message: 'error al obtener los datos del producto' })
  }
})

routeProducts.get('/compare', async (req, res) => {
  try {
    const [melonnResponse, zohoResponse] = await Promise.all([
      axios.get(`${MELON_URL}/logistics/inventory`, {
        headers: {
          'X-Api-Key': API_KEY_MELON
        }
      }),
      axios.get(URL_ZOHO_PRODUCTS)
    ])

    const melonnProducts = melonnResponse.data
    const zohoProducts = zohoResponse.data.data

    const matchingProducts = zohoProducts.filter(
      zohoProduct => melonnProducts.some(melonnProduct => melonnProduct.sku === zohoProduct['productWebCards.sku'] &&
      zohoProduct.statusWebCards === 'Activo' &&
      zohoProduct['settings.statusEcommerceConfig'] === 'Activo' &&
      melonnProduct.inventoryByWarehouse[0].availableQuantity > 0)
    )

    res.json(matchingProducts)
  } catch (error) {
    console.error('Error al hacer las peticiones', error)
    res.status(500).json({ message: 'Error al obtener y compara los productos' })
  }
})

routeProducts.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})
