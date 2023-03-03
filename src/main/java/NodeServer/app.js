//Challenge: Fix the errors in this project

 const express = require('express');
 const bodyParser = require('body-parser');
 const path = require('path')

 const app = express();

 app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static(path.join(__dirname, 'public')))
 app.use(bodyParser.json())

 let response = {

 }

 app.get('/', (req, res, next) => {
   res.send('<h1>Hi Elise</h1>');
   //response.dataVariable = req.body.numberVariable
   res.status(200).json(response)
 });

 // app.get('/getFile', (req, res, next) => {
 //   //console.log(__dirname)
 //  // console.log(path.join(__dirname, 'views', 'shop.html'))
 // // console.log(process.mainModule.path)
 //  // path.dirname(process.mainModule.filename)
 //   res.sendFile(path.join(__dirname, 'views', 'shop.html'))
 // });

 // app.get('/addNumber', (req, res, next) => {
 //   const body = data.number
 //   body.then(data=>{
 //     res.send(data + '<form action="/addTheNumber" method="POST"><form')
 //   }).catch(err=>{
 //     console.log(err)
 //   })
 // });

 app.get('/theNumber', (req,res, next)=> {

   //onsole.log(req.body.numberVariable);
   //res.send('This is Variable' + req.body.numberVariable)
   res.status(200).json(response)

 });

 app.post('/theNumber', (req,res, next)=> {

   response.dataVariable = req.body.numberVariable
   console.log(req.body.numberVariable);
  // res.send('This is Variable' + req.body.numberVariable)
   //res.send('This is Variable')

 });

 //hello elis
 //why is this not pushing to github

 // app.post('/addNumber', (req, res, next) => {
 //   console.log(req.body.name);
 //   res.redirect('/');
 // });

 // app.get('/addNumber', (req, res, next) => {
 //   res.send('<form action="/addTheNumber" method="POST"> <input type="text" name="name"><button type="submit">Add A Product</button> </form>');
 // });

 // app.post('/addNumber', (req, res, next) => {
 //   res.send('<form action="/addTheNumber" method="POST"> <input type="text" name="name"><button type="submit">Add A Product</button> </form>');
 // });

 // app.post('/addTheNumber', (req, res, next) => {
 //   console.log(req.body.name);
 //   res.redirect('/');
 // });

 // app.use('/admin', (req, res, next) => {
 //   console.log(req.url)
 //   res.send('<h1>This is an admin page</h1><br>' + req.url);
 // });

 // app.use('/', (req, res, next) => {
 //   res.send('<h1>404 page not found</h1>');
 // });

 app.listen(8000, () => {
   console.log("Server running successfully");
 });
