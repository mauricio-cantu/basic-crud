const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const reqDir = require('require-dir')
reqDir('./src/models')

const app = express()
app.use(express.json())
app.use('/api', require('./src/routes'))
app.use(cors())

mongoose.connect(
  'mongodb+srv://mauricio:mauricio@cluster0-lhsau.mongodb.net/test?retryWrites=true&w=majority'
)

app.listen(3333)
