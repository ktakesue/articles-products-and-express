const express = require("express");
const router = express.Router();
const db = require("../db/DB_articles.js");

router
  .get("/", (req, res) => {
    db
      .getAllArticles()
      .then(articles => {
        console.log("articles", articles);
        res.render("templates/articles/index", { articles });
      })
      .catch(err => {
        console.log("err", err);
      });
  })
  .get("/:title", (req, res) => {
    const articleTitle = req.params.title;
    console.log("articleTitle", articleTitle);
    db
      .getArticlebyTitle(articleTitle)
      .then(article => {
        console.log("article details", article);
        res.render("templates/articles/article", { article });
      })
      .catch(err => {
        console.log("err", err);
      });
  })
  .get("/:title/edit", (req, res) => {
    const articleTitle = req.params.title;
    console.log("articleTitle", articleTitle);
    db
      .getArticlebyTitle(articleTitle)
      .then(article => {
        console.log("article details", article);
        res.render("templates/articles/edit", { article });
      })
      .catch(err => {
        console.log("err", err);
      });
  })
  .post("/", (req, res) => {
    let postStatus = true;
    if (postStatus === true) {
      postStatus = db.createNewArticle(req.body);
      if (postStatus === true) {
        res.redirect("/articles");
      }
    }
    res.render("templates/articles/new", { success: postStatus });
  })
  .put("/:title", (req, res) => {
    let putStatus = true;
    if (putStatus === true) {
      putStatus = db.editArticlebyTitle(req.body);
      if (putStatus === true) {
        res.redirect("templates/articles/article");
      }
    }
    res.render("templates/articles/edit", { success: putStatus });
  })
  .delete("/:id", (req, res) => {
    let deleteStatus = true;
    if (deleteStatus === true) {
      deleteStatus = db.deleteArticlebyTitle(req.params);
      if (deleteStatus === true) {
        res.redirect("/articles");
      }
    }
    res.render("templates/articles/article", { success: deleteStatus });
  });

module.exports = router;
