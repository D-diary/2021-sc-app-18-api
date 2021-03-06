// npm i express lodash numeral moment dotenv ejs cors mysql2 sequelize passport uuid multer http-errors express-session helmet morgan

/*************** global init **************/
require('dotenv').config()
const port = process.env.PORT
const path = require('path')
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')


/************** view engine ***************/
app.set('view engine', 'ejs')
app.set('views', './views')
app.locals.pretty = true


/*************** middleware ***************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*************** static init **************/
app.use('/', express.static(path.join(__dirname, 'public')))


/*************** router init **************/
const apiRouter = require('./routes/api')
app.use('/api', apiRouter) // api를 제공해주는 곳
// app.use('/dev', devRouter) // api를 사용할수 있게 권한을 획득하는 곳

app.get('/token', (req, res, next) => {
  let token = jwt.sign({ 
  userid: 'booldook',
  nickname : '불뚝' 
  }, 
  process.env.JWT_KEY, {
    expiresIn: 60 * 60
  });
  res.send(token)
})


/**************** error init **************/
const notFoundRouter = require('./routes/error/404-router')
const errorRouter = require('./routes/error/500-router')
app.use(notFoundRouter)
app.use(errorRouter)


/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })