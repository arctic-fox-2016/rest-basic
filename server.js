let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let modelUser = require('./models/index');
let routes = require('./routes/user.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    res.json({message:"HelloW!"})

});

app.use('/api',routes)

app.listen(4000,function(){
  console.log('example app listenings port 3000!');

})
