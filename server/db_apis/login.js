const database = require('../services/database.js');

const baseQuery =
 `select cpf "id",
 pass "desc" from cliente`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
<<<<<<< HEAD
    binds.cpf = context.id;
=======
    binds.cd_tipo = context.id;
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6

    query += `\nwhere cpf = :cpf`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;