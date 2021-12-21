const express = require("express")
const { routes } = require("../../app.js")
const route = express.Router()
const controller = require("../../controllers/mongo/usersControllers.js")

route.post("/users",controller.insert)

module.exports = routes