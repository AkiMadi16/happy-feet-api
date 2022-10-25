const db = require('../db/db')

const Place = {
  findAll: () => {
    const sql = 'SELECT * FROM places';

    return db.query(sql)
    .then(dbRes => dbRes.rows)
  },

  create: (name, image, address) => {
    const sql = `
    INSERT INTO places(name, image, address)
    VALUES ($1, $2, $3)
    RETURNING *
    `
    return db
    .query(sql, [name, image, address])
    .then(dbRes => dbRes.rows[0])
  },


  delete: placeId => {
    const sql = `
    DELETE FROM places WHERE id = $1
    `
    return db.query(sql, [placeId])
  }
}

module.exports = Place