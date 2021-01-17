import express from 'express'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const app = express()
const SECRET = process.env.SERVER_SECRET

app.post('/sign', bodyParser.json(), (req, res, next) => {
  jwt.sign(req.body, SECRET, { expiresIn: '6h' }, (err, token) => {
    return err ? next(err) : res.json({ token })
  })
})

app.get('/verify/:token', (req, res, next) => {
  jwt.verify(req.params.token, SECRET, (err, decoded) => {
    return err ? next(err) : res.json(decoded)
  })
})

app.post('/logout', (req, res, next) => {
  res.json({ status: 'ok' })
})

app.listen(port, host, (err) => {
  if (err) throw err
  console.log(`radagast rides his crew on ${host}:${port}`)
})
