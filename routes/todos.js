const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  console.log('enter to router POST')
})

router.get('/', (req, res) => {
  console.log('enter Get request')
})

module.exports = router;