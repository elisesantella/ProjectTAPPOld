const express = require('express');
const router = express.Router();

require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const jwtString = process.env.JWT_STRING

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  // name: { type: String, required: true },
  itemId: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  // date: { type: Date, default: function() {
  //   let now = new Date();
  //   now.setHours(0, 0, 0, 0);
  //   return now;
  // }}
  anArray: { type: Array, required: false },
  anObject: { type: Object, required: false }
})

const companySchema = new Schema({
  companyName: { type: String, required: true },
  pin: { type: Number, required: true },
  companyId: { type: String, required: true },
  anArray: { type: Array, required: false },
  anObject: { type: Object, required: false }
})

const Transaction = mongoose.model('Transaction', transactionSchema) // 'Product' refers to the collection, so maps products collection to productSchema; see lecture notes
const Company = mongoose.model('Company', companySchema)

//let companyName = '';
//let pin = '';
const company = [];
let nextCompanyId = 0;

router.get('/', (req, res, next) => {
  Transaction.find() // Always returns an array
    .then(transactions => {
      //res.json({ 'All the Transactions': transactions })
      res.status(200).json({ transactions: transactions })
    })
    .catch(err => {
      console.log('Failed to find: ' + err)
      res.json({ 'success': false,'Transactions': [] })
    })
})


router.get('/thePrice', (req,res, next)=> {

  res.status(200).json({ price: price })

})

router.post('/thePrice', (req,res, next)=> {

  price = req.body.price
  console.log(price)
  res.status(200).json({ price })

})

let nextItemId = 0;
router.get('/addItem', (req, res, next) => {
  new Transaction({ itemId: '' + nextItemId, price: price })
    .save()
    .then(result => {
      nextItemId++
      console.log('saved Item to database')
      //res.json({'success': true})
      res.status(200).json({ 'success': true, price: price })
      //res.redirect('/')
    })
    .catch(err => {
      console.log('failed to addItem: ' + err)
      res.json({'success': false})
      //res.redirect('/')
    })
})

router.get('/theTotal', (req, res, next) => {
  Transaction.find()
  .then(transactions => {
    const total = transactions.reduce((acc, transaction) => acc + transaction.price, 0)
    res.status(200).json({ total: total })
  })
  .catch(err => {
    console.log('Failed to find: ' + err)
    res.json({ 'success': false,'Transactions': [] })
  })
})

router.post('/', (req, res, next) => {
  console.log(req.body.testData)
  Transaction.find() // Always returns an array
    .then(products => {
      res.json({ 'POST Mongoose Products': products })
    })
    .catch(err => {
      console.log('Failed to find: ' + err)
      res.json({ 'Products': [] })
    })
})

router.get('/signup', (req,res, next)=> {

  res.status(200).json({ companyName: companyName, pin: pin })

})

router.post('/signup', (req, res, next) => {
  // console.log(req.body.testData)
  //const company = req.query.company.trim()
  //let pin = req.query.pin.trim()
 companyName = req.body.companyName
 pin = req.body.pin
  new Company({ companyId: '' + nextCompanyId, companyName: companyName, pin: pin })
    .save()
    .then(result => {
      nextCompanyId++
      console.log('saved company to database')
      //res.redirect('/')
      pin = bcrypt.hashSync(pin + process.env.EXTRA_BCRYPT_STRING, 12),
      company.push({ companyName: companyName, pin: pin, companyId: nextCompanyId })
      console.log('company: ', company)
      res.status(200).json({ 'success': true, companyName: companyName, pin: pin });
    })
    .catch(err => {
      console.log('failed to signup: ' + err)
      //res.redirect('/')
      res.send({ success: false, message: "Error: Sign Up Unsuccessful!" });
    })
})

router.get('/signin', (req,res, next)=> {

  res.status(200).json({ companyName: companyName, pin: pin })

})

router.post('/signin', async (req, res, next) => {
companyName = req.body.companyName
pin = req.body.pin

  let theUser = {}
  for (let ii = 0; ii < company.length; ii++) {
    if (req.body.companyName == company[ii].companyName) {
      theUser.pin = users[ii].pin
      theUser.companyName = users[ii].companyName
      theUser.companyId = users[ii].companyId
    }
  }

  let checkPass = false
  try {
    checkPass = await bcrypt.compare(req.body.pin + process.env.EXTRA_BCRYPT_STRING, users[0].pin)
  } catch (err) {
    console.log('bcrypt.compare err: ' + err)
    res.send({ success: false })
    return
  }
  if (!checkPass) {
    res.send({ success: false })
    return
  }
  req.session.isLoggedIn = true
  req.session.theUser = theUser
  res.send({ success: true, login: true })
})

router.get('/signout', (req, res, next) => {
  let loggedIn = req.session.isLoggedIn
  req.session.isLoggedIn = false
  res.send('done: ' + loggedIn)
})

exports.routes = router
