const express = require("express");
const router = express.Router();
const db = require("../db/DB_products.js");

router
  .get("/", (req, res) => {
    const products = db.getAllProducts();
    console.log("products", products);
    res.render("templates/products/index", { products });
  })
  .get("/:id", (req, res) => {
    const products = db.getAllProducts();
    res.render("templates/products/product", { products });
  })
  .post("/", (req, res) => {
    let success = true;
    if (success === true) {
      success = db.createNewProduct(req.body);
      if (success === true) {
        res.redirect("/products");
      }
    }
    res.render("templates/products/new", { error: success });
  });

module.exports = router;
