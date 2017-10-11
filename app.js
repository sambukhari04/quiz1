const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
// const we = require('./routes/index');



//setting up routes
const clucks = require('./routes/clucks')
const index = require('./routes/index')

const app = express()

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', index)
app.use('/clucks', clucks)

const PORT = 5125;
app.listen(
  PORT,
  () =>
	console.log(`😛 Server listening on http://localhost:${PORT}`)
);
