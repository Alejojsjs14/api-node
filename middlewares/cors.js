import cors from 'cors'

const ACEPTED_ORIGINS = [ // desde aqui se pueden añadir los orgines que se aceptan
  'http://localhost:3000'
]

export const corsMiddleware = ({ acceptedOrigins = ACEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) { return callback(null, true) }
    if (!origin) { return callback(null, true) }

    return callback(new Error('Not allowed by CORS'))
  }
})
