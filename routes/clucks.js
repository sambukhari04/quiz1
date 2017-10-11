const Express = require('express')
const multer = require('multer')
const path = require('path')
const router = Express.Router()
const kx = require('../db/connections')

const upload = multer({dest: path.join(__dirname, '..', 'public', 'uploads')})

router.get('/', (req, res) => {
  res.render('posts/clucks_new')
})



// CREATE -> CREATE URL: /posts/ METHOD: POST
router.post('/', upload.single('photo'), (request, response) => {
  console.log("just entered / POST");

  const {body} = request;
  const {username} = request.body;
  const {content} = request.body;
  console.log("request-->", request);
  console.log("request.file-->", request.file);


//
console.log("PAST!!!");
// console.log(username, content, filename);

if (request.file != null && request.file != undefined) {
  const {filename} = request.file;
kx
  .insert({username: username, content: content, image_path: `/uploads/${filename}` })
  .into('clucks')
  .then(clucks => {
  console.log("inside kx.then, clucks-->", clucks);
  response.redirect('/')
}) } else {
  kx
      .insert({ content: content, username: username })
      .into('clucks')
      .then(() => {
          response.redirect('/')
      })
}
})

module.exports = router;
