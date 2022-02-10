const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('<h1>Oops!!! Please Provide Credentials</h1>')
})

module.exports = router
