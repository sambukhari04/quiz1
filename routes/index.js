const Express = require('express')
const router = Express.Router();
const kx = require('../db/connections')
//const path = require('path')



// app.post('/clucks_new', function(request, response) => {
//
// })
// router.get('/clucks', (request, response) => {
//   response.render('clucks')
// })
// router.get('/clucks_new', (request, response) => {
//   response.render('clucks_new')
// })

router.get('/', (request, response) => {
  kx
    .select()
    .from("clucks")
    .orderBy('created_at', 'DESC')
    .then((clucks) => {
      response.render('home', {clucks})
    })
})

// router.get('/', (request, response) => {
//   response.send('home')
// })

// router.post('/', (request, response) => {
//   console.log(9999);
// })


module.exports = router;
