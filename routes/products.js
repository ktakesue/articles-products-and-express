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
    const productId = Number(req.params.id);
    console.log("productId", productId);
    const product = db.getProductbyId(productId);
    console.log("product details", product);
    res.render("templates/products/product", product);
  })
  .post("/", (req, res) => {
    let postStatus = true;
    if (postStatus === true) {
      postStatus = db.createNewProduct(req.body);
      if (postStatus === true) {
        res.redirect("/products");
      }
    }
    res.render("templates/products/new", { error: postStatus });
  })
  .put("/:id", (req, res) => {
    let putStatus = true;
    if (putStatus === true) {
      putStatus = db.editProductbyId(req.params, req.body);
      if (putStatus === true) {
        res.redirect("templates/products/product");
      }
    }
    res.render("templates/products/edit", { error: putStatus });
  })
  .delete("/:id", (req, res) => {
    let deleteStatus = true;
    if (deleteStatus === true) {
      deleteStatus = db.deleteProductbyId(req.params);
      if (deleteStatus === true) {
        res.redirect("/products");
      }
    }
    res.render("templates/products/product", { error: deleteStatus });
  });

module.exports = router;
