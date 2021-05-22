const express = require('express')
// const base = require("./plugins/base.js")
// const modal = require("./plugins/modal.js")
// const users = require('./users.json')
const mongoose = require('mongoose')
const accountsRouter = require('./routes/accountsRouter.js')
const codesRouter = require('./routes/codeRoutes.js')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const port = 3006

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('css'))
app.use('/account', accountsRouter)
app.use('/', codesRouter)
app.use((req, res, next) => {
  res.status(404).send('Page not found')
})

mongoose.connect(
  'mongodb+srv://<username>:<password>@cluster0.fvtnv.mongodb.net/test',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log('MongoDB Connection Succeeded.')
    } else {
      console.log('Error in DB connection: ' + err)
    }
    app.listen(port, () => {
      console.log(`Заходи на ${port}`)
    })
  }
)
