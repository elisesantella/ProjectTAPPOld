const express = require('express');
const router = express.Router();

//Bcrypt Module
require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const jwtString = process.env.JWT_STRING

//Mongoose Module
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the Transaction schema
const transactionSchema = new Schema({
  // itemId: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});
 
// Define the Merchant schema
const merchantSchema = new Schema({
  companyName: { type: String, required: true },
  pin: { type: String, required: true },
  balance: { type: Number, required: true},
  transactions: { type: [transactionSchema], required: true } // Reference the transaction schema as an array
});

// Define the Customer schema
const customerSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  balance: { type: Number, required: true},
  transactions: { type: [transactionSchema], required: true } // Reference the transaction schema as an array
});

//Define the database collections
const Transaction = mongoose.model('Transaction', transactionSchema)
const Merchant = mongoose.model('Merchant', merchantSchema)
const Customer = mongoose.model('Customer', customerSchema)


// const numbers = '0123456789';
//User Arrays to store data
const merchant = [];
const customer = [];


// function generateNumberString(length) {
//   let result = '';
//   const numbersLenght = numbers.length;
//   for ( let i = 0; i < length; i++ ) {
//       result += numbers.charAt(Math.floor(Math.random() * numbersLenght));
//   }
//   return result;
// }

//Sign Up function & Merchant account saved to database
router.post('/signupM', async (req, res, next) => {
  const balance = 0;
  companyName = req.body.companyName
  pin = req.body.pin
  pin = bcrypt.hashSync(pin + process.env.EXTRA_BCRYPT_STRING, 12),
  new Merchant({ companyName: companyName, pin: pin, balance: balance, })
    .save()
    .then(result => {
      console.log('saved merchant to database')
      res.status(200).json({ 'success': true, companyName: companyName, pin: pin, balance: result.balance, 
      transactions: result.transactions });
      return result;
  }).catch(err => {
      console.log('failed to signup: ' + err)
      res.send({ success: false, message: "Error: Sign Up Unsuccessful!" });
    })
})

//Sign Up function & Customer account saved to database
router.post('/signupC', async (req, res, next) => {
  const balance = 0;
  username = req.body.username
  password = req.body.password
  password = bcrypt.hashSync(password + process.env.EXTRA_BCRYPT_STRING, 12),
  // customer.push({ username: username, password: password })
  // console.log('customer: ', customer)
  new Customer({ username: username, password: password, balance: balance, })
    .save()
    .then(result => {
      console.log('saved customer to database')
      res.status(200).json({ 'success': true, username: username, password: password, balance: result.balance, 
      transactions: result.transactions });
      return result;
  }).catch(err => {
      console.log('failed to signup: ' + err)
      res.send({ success: false, message: "Error: Sign Up Unsuccessful!" });
    })
})

//Check company name and pin to authorise sign in
router.post('/signinM', async (req, res, next) => {
  companyName = req.body.companyName
  pin = req.body.pin

  try {
    const merchant = await Merchant.findOne({ companyName: companyName });

    if (!merchant) {
      return res.status(401).json({ error: 'Failed to Find Account!!!!!!' });
    }

    const checkPass = await bcrypt.compare(pin + process.env.EXTRA_BCRYPT_STRING, merchant.pin);

    if (checkPass) {
      return res.json(merchant);
    } else {
      return res.status(401).json({ error: 'Invalid PIN' });
    }
  } catch (err) {
    console.log('Failed to find account: ' + err);
    return res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

//Check username and password to authorise sign in
router.post('/signinC', async (req, res, next) => {
  username = req.body.username
  password = req.body.password

  try {
    const customer = await Customer.findOne({ username: username });

    if (!customer) {
      return res.status(401).json({ error: 'Invalid Account Number or Password' });
    }

    const checkPass = await bcrypt.compare(password + process.env.EXTRA_BCRYPT_STRING, customer.password);

    if (checkPass) {
      return res.json(customer);
    } else {
      return res.status(401).json({ error: 'Invalid Account Number or Password' });
    }
  } catch (err) {
    console.log('Failed to find account: ' + err);
    return res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});


//Adding top up to balance for Customer
router.post('/topup/:usernameData', (req,res, next)=> { 
  const number = req.body.number
  Customer.findOne({ username: req.params.usernameData }) // Always returns an array
    .then(customers => {
      const newBalance = customers.balance + parseInt(number);
      customers.balance = newBalance;
      return customers.save();
    })
    .then(updatedCustomer => {
      res.json({ success: true, customer: updatedCustomer});
    })
    .catch(err => {
      console.log('Failed to update balance: ' + err);
      res.json({ success: false });
    });
});

//Add new transaction to customer storing price & date
router.post('/addtransaction/:usernameData', async (req, res) => {
  //const customerId = req.body.id;
  const price = req.body.price;
  console.log({price})
  try {
    const customer = await Customer.findOne({ username: req.params.usernameData });
    //console.log({username})
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    
    const transaction = new Transaction({ price: price });
    customer.transactions.push(transaction);

    const newBalance = customer.balance - parseInt(price);
    customer.balance = newBalance;
    
    await customer.save();
    
    // res.json({ message: 'Transaction added successfully' });
    //res.json({ success: true, customer});
    return res.json(customer);
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: 'Internal server error' });
    //res.json({ success: false });
    return res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

//Add new transaction in the Merchant account finding by company name
router.post('/addtransactionM/:companyNameData', async (req, res) => {
  const price = req.body.price;
  console.log({price})
  try {
    const merchant = await Merchant.findOne({ companyName: req.params.companyNameData });
    if (!merchant) {
      return res.status(404).json({ error: 'Merchant not found' });
    }
    
    const transaction = new Transaction({ price: price });
    merchant.transactions.push(transaction);

    const newBalance = merchant.balance + parseInt(price);
    merchant.balance = newBalance;

    await merchant.save();
    
    // res.json({ message: 'Transaction added successfully' });
    //res.json({ success: true, merchant});
    return res.json(merchant);
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: 'Internal server error' });
    //res.json({ success: false });
    return res.status(500).json({ error: 'An error occurred while processing your request' });
  }

});

//Store the price sent through by Merchant used to Test if the price has gone through
router.get('/addPrice', (req,res, next)=> {

  res.status(200).json({ price: price })

})

router.post('/addprice', (req,res, next)=> {

  price = req.body.price
  console.log(price)
  res.status(200).json({ price })

})

exports.routes = router
