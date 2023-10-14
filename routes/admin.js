const express = require("express");
const path = require("path")
const rootDir = require('../utils/path')
const adminRouter = express.Router();
 
adminRouter.get("/add-product",(req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  })

  adminRouter.post("/product", (req, res)=> {
    console.log(req.body)
    res.redirect("/shop")
  })

module.exports = adminRouter;