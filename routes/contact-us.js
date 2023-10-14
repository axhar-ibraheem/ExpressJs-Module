const express = require("express");
const path = require("path");
const rootDir = require("../utils/path")
const contactUsRouter = express.Router();

contactUsRouter.get('/contactus', (req, res)=> {
    res.sendFile(path.join(rootDir, "views", "contactUs.html"))
})


module.exports = contactUsRouter;