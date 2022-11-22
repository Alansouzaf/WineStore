const oracledb = require('oracledb');
const database = require('../services/database.js');

const baseQuery =
<<<<<<< HEAD
 `SELECT CD_CLIENTE "id",NOME "nome",CPF "CPF",TELEFONE "Phone", EMAIL "mail", pass "pass" FROM CLIENTE`;
=======
 `SELECT CD_CLIENTE "id",NOME "nome",CPF "CPF", dt_nascimento, TELEFONE "Phone", EMAIL "mail", pass "pass" FROM CLIENTE`;
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.cd_cliente = context.id;

    query += `\nwhere cd_cliente = :cd_cliente`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

const createSql =
 `insert into cliente (
<<<<<<< HEAD
     cd_cliente, NOME,CPF,EMAIL, pass
=======
     cd_cliente, NOME,CPF, EMAIL, pass
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6
  ) values (:cli_id,
    :nome,
    :cpf,
    :email,
    :pass
  ) returning cd_cliente
  into :cd_cliente`;

async function create(emp) {
  const cliente = Object.assign({}, emp);

  cliente.cd_cliente = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  };

  const result = await database.simpleExecute(createSql, cliente, { autoCommit: true} );

  cliente.cd_cliente = result.outBinds.cd_cliente[0];

  return cliente;
}

module.exports.create = create;