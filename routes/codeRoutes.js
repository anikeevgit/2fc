const express = require('express')
const codesController = require("../controllers/Codes.js")
const codesRouter = express.Router()

codesRouter.post('/getcode', codesController.getCode)

module.exports = codesRouter