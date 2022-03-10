import express from 'express'
import jwt from 'jsonwebtoken'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const app = express()
const SECRET = process.env.SERVER_SECRET
const JSONBodyParser = express.json()

app.post('/sign', JSONBodyParser, (req, res, next) => {
  jwt.sign(req.body, SECRET, { expiresIn: '6h' }, (err, token) => {
    return err ? next(err) : res.json({ token })
  })
})

app.post('/verify', JSONBodyParser, (req, res, next) => {
  jwt.verify(req.body.token, SECRET, (err, decoded) => {
    return err ? next(err) : res.json(decoded)
  })
})

app.post('/logout', (req, res, next) => {
  res.json({ status: 'ok' })
})

app.use((err, req, res, next) => {
  res.status(400).send(err.message || err)
})

app.listen(port, host, (err) => {
  if (err) throw err
  console.log(`radagast rides his crew on ${host}:${port}`)
})
