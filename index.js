'use-strict'
let express = require('express')
let app = express()
let routes = require('./routes/users.js')
app.set('port', (process.env.PORT || 5000));

app.use('/api', routes)

app.get('/', function(){
  res.send('welcome')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
