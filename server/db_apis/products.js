<<<<<<< HEAD
const oracledb = require('oracledb');
const database = require('../services/database.js');

const baseQuery =
 `select cd_produto "id", 
 (select ds_tipo from prod_tipo pt where p.cd_tipo=pt.cd_tipo  ) "tipo",
 nm_produto "desc", to_char(valor, '999.99') "price" from produtos p`;
=======
const database = require('../services/database.js');

const baseQuery =
 `select cd_tipo "id",
 ds_tipo "desc" from prod_tipo`;
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
<<<<<<< HEAD
    binds.cd_produto = context.id;

    query += `\nwhere cd_produto = :cd_produto`;
=======
    binds.cd_tipo = context.id;

    query += `\nwhere cd_tipo = :cd_tipo`;
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
<<<<<<< HEAD
/* async function create(emp) {
  const produtos = Object.assign({}, emp);

  produtos.cd_produto = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  };

  const result = await database.simpleExecute(createSql, produtos, { autoCommit: true} );

  produtos.cd_produto = result.outBinds.cd_produto[0];

  return produtos;
}

module.exports.create = create;  */
=======
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6

