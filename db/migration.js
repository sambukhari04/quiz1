const kx = require('./connections')


  kx.schema.createTable('clucks', table => {
   table.increments('id')
   table.string('username')
   table.string('image_path')
   table.text('content')
   table.timestamps(false, true)
 }).then(res => {
   console.log(res)
   process.exit()
 }).catch(res => {
   console.log(res)
   process.exit()
 })
