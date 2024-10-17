const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Create a new customer
router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const newCustomer = await Customer.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.json(newCustomer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;