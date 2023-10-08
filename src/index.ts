import express from 'express'
const app = express()
const router = express.Router()

app.get('/', (req, res) => res.send('hello'))

app.listen(3000, () => {
  console.log('server is running')
})

router.get('/getTwitter')