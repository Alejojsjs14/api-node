import express, { json } from 'express'
import cors from 'cors'
import axios from 'axios'
import { MELON_URL, API_KEY_MELON, URL_ZOHO_PRODUCTS } from './config.js'

const app = express()

app.use(json())

app.disable('x-powered-by')

// ? se traen los productos desde la melonn api
app.get('/inventory', async (req, res) => {
  try {
    const response = await axios.get(`${MELON_URL}/logistics/inventory`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Api-Key': API_KEY_MELON
      }
    })

    res.json(response.data)
  } catch (error) {
    console.error('error al hacer la peticion: ', error)

    res.status(500).json({ message: 'error al obtener los datos del producto' })
  }
})

app.get('/zohoProducts', async (req, res) => {
  try {
    const response = await axios.get(URL_ZOHO_PRODUCTS)
    res.json(response.data)
  } catch (error) {
    console.error('error al hacer la peticion', error)
    res.status(500).json({ message: 'error al obtener los datos del producto' })
  }
})

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

const PORT = process.env.PORT ?? 1234

// ? se habilita el cors para el front
app.use(cors({ origin: 'http://localhost:3000' }))

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
