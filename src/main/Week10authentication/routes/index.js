const express = require('express');
const router = express.Router();

require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const jwtString = process.env.JWT_STRING

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the Transaction schema
const transactionSchema = new Schema({
  // name: { type: String, required: true },
  // itemId: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  // date: { type: Date, default: function() {
  //   let now = new Date();
  //   now.setHours(0, 0, 0, 0);
  //   return now;
  // }}
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

const Transaction = mongoose.model('Transaction', transactionSchema)
const Merchant = mongoose.model('Merchant', merchantSchema)
const Customer = mongoose.model('Customer', customerSchema)


const numbers = '0123456789';
const merchant = [];
const customer = [];


function generateNumberString(length) {
  let result = '';
  const numbersLenght = numbers.length;
  for ( let i = 0; i < length; i++ ) {
      result += numbers.charAt(Math.floor(Math.random() * numbersLenght));
  }
  return result;
}

router.post('/signupM', async (req, res, next) => {
  const balance = 0;
  companyName = req.body.companyName
  pin = req.body.pin
  pin = bcrypt.hashSync(pin + process.env.EXTRA_BCRYPT_STRING, 12),
  merchant.push({ companyName: companyName, pin: pin })
  console.log('merchant: ', merchant)
  new Merchant({ companyName: companyName, pin: pin, balance: balance, })
    .save()
    .then(result => {
      console.log('saved merchant to database')
      res.status(200).json({ 'success': true, companyName: companyName, pin: pin, balance: result.balance, 
      transactions: result.transactions });
      return result;
  }).catch(err => {
      console.log('failed to signup: ' + err)
      //res.redirect('/')
      res.send({ success: false, message: "Error: Sign Up Unsuccessful!" });
    })
})

router.post('/signupC', async (req, res, next) => {
  const balance = 0;
  username = req.body.username
  password = req.body.password
  password = bcrypt.hashSync(password + process.env.EXTRA_BCRYPT_STRING, 12),
  customer.push({ username: username, password: password })
  console.log('customer: ', customer)
  new Customer({ username: username, password: password, balance: balance, })
    .save()
    .then(result => {
      console.log('saved customer to database')
      res.status(200).json({ 'success': true, username: username, password: password, balance: result.balance, 
      transactions: result.transactions });
      return result;
  }).catch(err => {
      console.log('failed to signup: ' + err)
      //res.redirect('/')
      res.send({ success: false, message: "Error: Sign Up Unsuccessful!" });
    })
})

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
      return res.status(401).json({ error: 'Invalid Account Number or Password' });
    }
  } catch (err) {
    console.log('Failed to find account: ' + err);
    return res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

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

router.get('/addPrice', (req,res, next)=> {

  res.status(200).json({ price: price })

})

router.post('/addprice', (req,res, next)=> {

  price = req.body.price
  console.log(price)
  res.status(200).json({ price })

})

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
    res.json({ success: true, customer});
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: 'Internal server error' });
    res.json({ success: false });
  }
});

router.post('/addtransactionM/:companyNameData', async (req, res) => {
  //const customerId = req.body.id;
  const price = req.body.price;
  console.log({price})
  try {
    const merchant = await Merchant.findOne({ companyName: req.params.companyNameData });
    //console.log({username})
    if (!merchant) {
      return res.status(404).json({ error: 'Merchant not found' });
    }
    
    const transaction = new Transaction({ price: price });
    merchant.transactions.push(transaction);

    const newBalance = merchant.balance + parseInt(price);
    merchant.balance = newBalance;

    await merchant.save();
    
    // res.json({ message: 'Transaction added successfully' });
    res.json({ success: true, merchant});
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: 'Internal server error' });
    res.json({ success: false });
  }
});

router.get('/addPrice', (req,res, next)=> {

  res.status(200).json({ price: price })

})

router.post('/addprice', (req,res, next)=> {

  price = req.body.price
  console.log(price)
  res.status(200).json({ price })

})
// router.post('/addtransaction/:id', (req, res, next) => {

//   const customerId = req.body.id;
//   const transaction = new Transaction({ 
//     price: req.body.price
//   });

//   Customer.findOneAndUpdate(
//     {_id: customerId},
//     { $push: { transactions: transaction } },
//     { new: true}
//   )
//   .then(updatedCustomer => {
//     console.log('saved transaction to Customer');
//     console.log(transaction)
//     res.send(JSON.stringify(updatedCustomer))
//   })
//   .catch(err => {
//     console.log('failed to add transactions: ' + err);
//   })
// });
// const transactionSchema = new Schema({
//   // name: { type: String, required: true },
//   itemId: { type: String, required: true },
//   price: { type: Number, required: true },
//   date: { type: Date, default: Date.now },
//   // date: { type: Date, default: function() {
//   //   let now = new Date();
//   //   now.setHours(0, 0, 0, 0);
//   //   return now;
//   // }}
//   anArray: { type: Array, required: false },
//   anObject: { type: Object, required: false }
// })

// const companySchema = new Schema({
//   companyName: { type: String, required: true },
//   pin: { type: Number, required: true },
//   companyId: { type: String, required: true },
//   // anArray: { type: Array, required: false },
//   // anObject: { type: Object, required: false }
// })

// const Transaction = mongoose.model('Transaction', transactionSchema) // 'Product' refers to the collection, so maps products collection to productSchema; see lecture notes
// const Company = mongoose.model('Company', companySchema)

// //let companyName = '';
// //let pin = '';
// const company = [];
// let nextCompanyId = 0;

// router.get('/', (req, res, next) => {
//   Transaction.find() // Always returns an array
//     .then(transactions => {
//       //res.json({ 'All the Transactions': transactions })
//       res.status(200).json({ transactions: transactions })
//     })
//     .catch(err => {
//       console.log('Failed to find: ' + err)
//       res.json({ 'success': false,'Transactions': [] })
//     })
// })


// router.get('/thePrice', (req,res, next)=> {

//   res.status(200).json({ price: price })

// })

// router.post('/thePrice', (req,res, next)=> {

//   price = req.body.price
//   console.log(price)
//   res.status(200).json({ price })

// })

// let nextItemId = 0;
// router.get('/addItem', (req, res, next) => {
//   new Transaction({ itemId: '' + nextItemId, price: price })
//     .save()
//     .then(result => {
//       nextItemId++
//       console.log('saved Item to database')
//       //res.json({'success': true})
//       res.status(200).json({ 'success': true, price: price })
//       //res.redirect('/')
//     })
//     .catch(err => {
//       console.log('failed to addItem: ' + err)
//       res.json({'success': false})
//       //res.redirect('/')
//     })
// })

// router.get('/theTotal', (req, res, next) => {
//   Transaction.find()
//   .then(transactions => {
//     const total = transactions.reduce((acc, transaction) => acc + transaction.price, 0)
//     res.status(200).json({ total: total })
//   })
//   .catch(err => {
//     console.log('Failed to find: ' + err)
//     res.json({ 'success': false,'Transactions': [] })
//   })
// })

// router.post('/', (req, res, next) => {
//   console.log(req.body.testData)
//   Transaction.find() // Always returns an array
//     .then(products => {
//       res.json({ 'POST Mongoose Products': products })
//     })
//     .catch(err => {
//       console.log('Failed to find: ' + err)
//       res.json({ 'Products': [] })
//     })
// })

// router.get('/signup', (req,res, next)=> {

//   res.status(200).json({ companyName: companyName, pin: pin })

// })

// router.post('/signup', (req, res, next) => {
//   // console.log(req.body.testData)
//   //const company = req.query.company.trim()
//   //let pin = req.query.pin.trim()
//  companyName = req.body.companyName
//  pin = req.body.pin
//   new Company({ companyId: '' + nextCompanyId, companyName: companyName, pin: pin })
//     .save()
//     .then(result => {
//       nextCompanyId++
//       console.log('saved company to database')
//       //res.redirect('/')
//       pin = bcrypt.hashSync(pin + process.env.EXTRA_BCRYPT_STRING, 12),
//       company.push({ companyName: companyName, pin: pin, companyId: nextCompanyId })
//       console.log('company: ', company)
//       res.status(200).json({ 'success': true, companyName: companyName, pin: pin });
//     })
//     .catch(err => {
//       console.log('failed to signup: ' + err)
//       //res.redirect('/')
//       res.send({ success: false, message: "Error: Sign Up Unsuccessful!" });
//     })
// })

// router.get('/signin', (req,res, next)=> {

//   res.status(200).json({ companyName: companyName, pin: pin })

// })

// router.post('/signin', async (req, res, next) => {
// companyName = req.body.companyName
// pin = req.body.pin

//   let theUser = {}
//   for (let ii = 0; ii < company.length; ii++) {
//     if (req.body.companyName == company[ii].companyName) {
//       theUser.pin = users[ii].pin
//       theUser.companyName = users[ii].companyName
//       theUser.companyId = users[ii].companyId
//     }
//   }

//   let checkPass = false
//   try {
//     checkPass = await bcrypt.compare(req.body.pin + process.env.EXTRA_BCRYPT_STRING, users[0].pin)
//   } catch (err) {
//     console.log('bcrypt.compare err: ' + err)
//     res.send({ success: false })
//     return
//   }
//   if (!checkPass) {
//     res.send({ success: false })
//     return
//   }
//   req.session.isLoggedIn = true
//   req.session.theUser = theUser
//   res.send({ success: true, login: true })
// })

// router.get('/signout', (req, res, next) => {
//   let loggedIn = req.session.isLoggedIn
//   req.session.isLoggedIn = false
//   res.send('done: ' + loggedIn)
// })

exports.routes = router
