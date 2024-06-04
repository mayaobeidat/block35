const pg = require("pg");

const client = new pg.Client("postgres://localhost/acme_store");

const getAllUsers = async () => {
  const response = await client.query(`SELECT * FROM users ORDER BY id ASC`);
  return response.rows;
};
const getAllProducts = async () => {
  const response = await client.query(`SELECT * FROM product ORDER BY id ASC`);
  return response.rows;
};
const getAllFavorites = async () => {
  const response = await client.query(
    `SELECT * FROM favorite ORDER BY id ASC`
  );
  return response.rows;
};
const getSingleUserById = async (id) => {
  const response = await client.query(`SELECT * FROM users WHERE id = $1`, [
    id,
  ]);
  return response.rows[0];
};
const getFavoritesByUserId = async (params_id) => {
  const fav_response = await client.query(
    `SELECT * FROM favorite WHERE user_id = $1`,
    [params_id]
  );
  return {
    favorites: fav_response.rows,
  };
};
const postFavoriteByUserId = async (body) => {
  await client.query(
    `INSERT INTO favorite(product_id, user_id) VALUES($1, $2)`,
    [body.product_id, body.user_id]
  );
  return {
    product_id: body.product_id,
    user_id: body.user_id,
  };
};
const deleteFavoriteByUserId = async (id) => {
  await client.query(`DELETE FROM favorite WHERE id = $1`, [Number(id)]);
  return {
    id: id,
  };
};
module.exports = {
  getAllUsers,
  getAllProducts,
  getAllFavorites,
  getSingleUserById,
  getFavoritesByUserId,
  postFavoriteByUserId,
  deleteFavoriteByUserId,
  client,
};