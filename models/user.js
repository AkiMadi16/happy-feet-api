const db = require('../db/db')

const User = {
  create: (name, email, passwordDigest) => {
    const sql = `
      INSERT INTO users(name, email, password_digest)
      VALUES ($1, $2, $3)
      RETURNING *
    `
    // column we use as password_digest and passing as camelcase

    return db
      .query(sql, [name, email, passwordDigest])
      .then(dbRes => dbRes.rows[0].email)
  },


findByEmail: email => {
  const sql = `
    SELECT * FROM users
    WHERE email = $1
  `

  return db
    .query(sql, [email])
    .then(dbRes => dbRes.rows[0])
},

findById: id => {
  const sql = `
    SELECT * FROM users
    WHERE id = $1
  `

  return db
    .query(sql, [id])
    .then(dbRes => dbRes.rows[0].email)
}
}



module.exports = User