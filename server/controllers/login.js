const login = require('../db_apis/login.js');

<<<<<<< HEAD
async function get(req, res, next) {
  try {
    const context = {};
=======

async function get(req, res, next) {
  try {
    const context = {};

>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6
    context.id = parseInt(req.params.id, 10);

    const rows = await login.find(context);

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

module.exports.get = get;