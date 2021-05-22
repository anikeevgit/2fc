const express = require('express')
const accountsController = require("../controllers/Accounts.js")
// const codesController = require("../controllers/Codes.js")
const accountsRouter = express.Router()

accountsRouter.get('/getaccounts', accountsController.getAccount)
accountsRouter.post('/postaccounts', accountsController.postAccount)
accountsRouter.post('/delaccount', accountsController.delAccount)

module.exports = accountsRouter