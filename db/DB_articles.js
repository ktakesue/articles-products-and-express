const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "articles_user",
    password: "password",
    database: "articles_app"
  }
});

// knex
//   .raw("SELECT * FROM article")
//   .then(data => {
//     console.log("data", data.rows);
//     return data.rows;
//   })
//   .catch(err => {
//     console.log("err", err);
//   });

class DB_articles {
  constructor() {
    this.storage = [];
    // this.exampleArticles();
  }

  // exampleArticles() {
  //   this.storage.push({
  //     title: "captain underpants",
  //     body: "i am the captain of these pants now",
  //     author: "evan abraham",
  //     urlTitle: encodeURIComponent("captain underpants")
  //   });

  //   this.storage.push({
  //     title: "how millenials are killing the restaurant industry",
  //     body: "studies show that millenials are poor because of us",
  //     author: "sad babyboomers",
  //     urlTitle: encodeURIComponent(
  //       "how millenials are killing the restaurant industry"
  //     )
  //   });
  // }

  getAllArticles() {
    // return this.storage.slice();
    return knex.raw("SELECT * FROM article").then(data => {
      return data.rows;
    });
  }

  getArticlebyTitle(id) {
    // let result;
    // // console.log("title", title);
    // this.storage.forEach(article => {
    //   if (article.title === title) {
    //     result = article;
    //   }
    // });
    // // console.log("result", result);
    // return result;

    return (
      knex
        .raw(`SELECT * FROM article WHERE article_id = ${id}`)
        // .raw("SELECT * FROM article")
        // .where("article_id", "=", id)
        .then(data => {
          console.log("getARTICLEbyTITles", data.rows);
          return data.rows;
        })
    );
  }

  createNewArticle(data) {
    // this.storage.push({
    //   title: data.title,
    //   body: data.body,
    //   author: data.author,
    //   urlTitle: encodeURIComponent(data.urlTitle)
    // });
    // console.log("new article successful", this.storage);

    return knex("article")
      .insert({ title: data.title, body: data.body, author: data.author })
      .then(data => {
        console.log("neww article?", data);
        return data;
      });
  }

  editArticlebyTitle(data) {
    // console.log("data", data);
    // this.storage.forEach(article => {
    //   if (article.title === data.title) {
    //     article.title = data.title;
    //     article.body = data.body;
    //     article.author = data.author;
    //   }
    // });
    // console.log("editted article successful", this.storage);
    // return this.storage;
    return knex("article")
      .where("article_id", "=", id)
      .update({ title: data.title, body: data.body, author: data.author })
      .then(data => {
        console.log("editted article", data);
        return data;
      });
  }

  deleteArticlebyTitle(data) {
    this.storage.slice().forEach((article, index) => {
      if (article.title === data.title) {
        this.storage.splice(index, 1);
      }
    });
    console.log("delete article successful", this.storage);
    return this.storage;
  }
}
module.exports = new DB_articles();
