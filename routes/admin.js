const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/add-product",(req, res, next) => {
    console.log("this is the second middleware")
    const formHtml = '<form action="/admin/product" method="POST"><input type="text" name="title"><input type="number" name ="size"><button>Add Product</button></form>'
    res.send(formHtml)
  })
  
  adminRouter.post("/product", (req, res, next)=> {
    console.log(req.body)
    res.redirect("/shop")
  })

module.exports = adminRouter;