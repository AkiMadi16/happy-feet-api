const db = require("../db/db");

const Place = {
  findAll: () => {
    const sql = "SELECT * FROM places";

    return db.query(sql).then((dbRes) => dbRes.rows);
  },

  create: (name, img, address, user_email) => {
    const sql = `
    INSERT INTO places(name, img, address, user_email)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;
    return db
      .query(sql, [name, img, address, user_email])
      .then((dbRes) => dbRes.rows[0]);
  },

  delete: (placeId) => {
    const sql = `
    DELETE FROM places WHERE id = $1
    `;
    return db.query(sql, [placeId]);
  },
};

module.exports = Place;
