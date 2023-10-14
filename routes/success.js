const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const { execPath } = require("process");
const successRouter = express.Router();


successRouter.post("/success", (req, res)=> {
    res.sendFile(path.join(rootDir, "views", "success.html"))
} )


module.exports = successRouter;