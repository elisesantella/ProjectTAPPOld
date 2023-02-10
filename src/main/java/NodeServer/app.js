// Challenge: Fix the errors in this project

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path')

// const app = express();
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')))

// app.use(bodyParser.json());

// app.post('/', (req, res, next) => {
//   res.send('<h1>Hi from Express</h1>' + req.number);
// });


// app.get('/getFile', (req, res, next) => {
//   //console.log(__dirname)
//  // console.log(path.join(__dirname, 'views', 'shop.html'))
// // console.log(process.mainModule.path)
//  // path.dirname(process.mainModule.filename)
//   res.sendFile(path.join(__dirname, 'views', 'shop.html'))
// });

// app.get('/addProduct', (req, res, next) => {
//   res.send('<form action="/addTheProduct" method="POST"> <input type="text" name="name"><input type="text" name="name1"> <button type="submit">Add A Product</button> </form>');
// });

// app.post('/addProduct', (req, res, next) => {
//   res.send('<form action="/addTheProduct" method="POST"> <input type="text" name="name"><input type="text" name="name1"> <button type="submit">Add A Product</button> </form>');
// });

// app.post('/addTheProduct', (req, res, next) => {
//   console.log(req.body.name);
//   console.log(req.body.name1);
//   res.redirect('/');
// });

// app.get('/products/:labWork', (req, res, next) => {
//   console.log('The URL is: ' + req.url)
//   res.send('<h1>You typed this route in the URL bar</h1><br>' + req.url);
// });

// app.use('/admin', (req, res, next) => {
//   console.log(req.url)
//   res.send('<h1>This is an admin page</h1><br>' + req.url);
// });

// app.use('/', (req, res, next) => {
//   res.send('<h1>404 page not found</h1>');
// });

// app.listen(3000);

const express = require('express'); //Line 1
const app = express(); //Line 2

const bodyParser = require('body-parser');
const path = require('path')
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json());

// This displays message that the server running and listening to specified port
app.listen(3000);

// create a GET route
// app.post('/', (req, res) => { //Line 9
//   console.log('The variable is: ' + req.body.userId)
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' + req.body.userId}); //Line 10
// }); //Line 11

app.get('/addProduct', (req, res, next) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});

app.post('/addProduct1', (req, res, next) => {
  console.log('The variable is: ' + req.body.userId);
});