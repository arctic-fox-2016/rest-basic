'use-strict'
let express = require('express')
let app = express()
let routes = require('./routes/users.js')
app.listen(3000,function(){
  console.log('listening on 3000')
})

app.use('/api', routes)
