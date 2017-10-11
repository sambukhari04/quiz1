const kx = require('knex')({
  client: 'pg',
  connection: {
    database: 'clucks'
  }
})

// kx.on('query', query => {
//   console.log(query.sql)
//   console.log(query.binding)
// })
module.exports = kx
