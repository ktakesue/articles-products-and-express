const express = require("express");
const router = express.Router();
const db = require("../db/DB_products.js");

router
  .get("/", (req, res) => {
    db
      .getAllProducts()
      .then(products => {
        console.log("products", products);
        res.render("templates/products/index", { products });
      })
      .catch(err => {
        console.log("err", err);
      });
  })
  .get("/:id", (req, res) => {
    const productId = Number(req.params.id);
    console.log("productId", productId);
    db
      .getProductbyId(productId)
      .then(product => {
        console.log("product details", product);
        res.render("templates/products/product", { product });
      })
      .catch(err => {
        console.log("err", err);
      });
  })
  .get("/:id/edit", (req, res) => {
    const productId = Number(req.params.id);
    console.log("productId", productId);
    const product = db.getProductbyId(productId);
    console.log("product details", product);
    res.render("templates/products/edit", product);
  })
  .post("/", (req, res) => {
    let postStatus = true;
    if (postStatus === true) {
      postStatus = db.createNewProduct(req.body);
      if (postStatus === true) {
        res.redirect("/products");
      }
    }
    res.render("templates/products/new", { success: postStatus });
  })
  .put("/:id", (req, res) => {
    let putStatus = true;
    if (putStatus === true) {
      putStatus = db.editProductbyId(req.params, req.body);
      if (putStatus === true) {
        res.redirect("templates/products/product");
      }
    }
    res.render("templates/products/edit", { success: putStatus });
  })
  .delete("/:id", (req, res) => {
    let deleteStatus = true;
    if (deleteStatus === true) {
      deleteStatus = db.deleteProductbyId(req.params);
      if (deleteStatus === true) {
        res.redirect("/products");
      }
    }
    res.render("templates/products/product", { success: deleteStatus });
  });

module.exports = router;
