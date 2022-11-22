const express = require('express');
const router = new express.Router();
const cors = require('cors');
const products = require('../controllers/products.js');
const register = require('../controllers/register.js');
const login = require('../controllers/login.js');

router.use(cors());
router.route('/products/:id?')
  .get(products.get);
  //.post(products.post);

router.route('/register/:id?')
  .get(register.get)
  .post(register.post);

  router.route('/login/:id?')
<<<<<<< HEAD
  .get(login.get)
=======
  .get(login.get);
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6
  //.post(login.post); 
  

module.exports = router;
