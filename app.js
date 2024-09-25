import express, { json } from 'express'
import { routeProducts } from './routes/products.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()

app.disable('x-powered-by')
app.use(json())

// ? se habilita el cors para el front
app.use(corsMiddleware())
// ? trae el inventario desde la melonn api
app.get('/inventory', routeProducts)
// ? trae los productos desde zoho
app.get('/zohoProducts', routeProducts)
// ? trae los productos de zoho que tengan disponibilidad
app.get('/compare', routeProducts)

app.get('/', routeProducts)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
