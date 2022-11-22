const products = require('../db_apis/products.js');

<<<<<<< HEAD
async function get(req, res, next) {
  try {
    const productget = {};

    productget.id = parseInt(req.params.id, 10);

    const rows = await products.find(productget);
=======

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);

    const rows = await products.find(context);
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

<<<<<<< HEAD
module.exports.get = get;
=======
module.exports.get = get;
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6
