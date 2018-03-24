class DB_articles {
  constructor() {
    this.storage = [];
    this.exampleArticles();
  }

  exampleArticles() {
    this.storage.push({
      title: "captain underpants",
      body: "i am the captain of these pants now",
      author: "evan abraham",
      urlTitle: encodeURIComponent("captain underpants")
    });

    this.storage.push({
      title: "how millenials are killing the restaurant industry",
      body: "studies show that millenials are poor because of us",
      author: "sad babyboomers",
      urlTitle: encodeURIComponent(
        "how millenials are killing the restaurant industry"
      )
    });
  }

  getAllArticles() {
    return this.storage.slice();
  }

  getArticlebyTitle(title) {
    let result;
    console.log("title", title);
    this.storage.forEach(article => {
      if (article.title === title) {
        result = article;
      }
    });
    console.log("result", result);
    return result;
  }

  createNewArticle(data) {
    this.storage.push({
      title: data.title,
      body: data.body,
      author: data.author,
      urlTitle: encodeURIComponent(data.urlTitle)
    });
    console.log("new article successful");
  }

  editArticlebyTitle(title) {}

  deleteArticlebyTitle(title) {
    this.storage.slice().forEach((article, idx) => {
      if (article.title === title) {
        this.storage.splice(idx, 1);
      }
    });
  }
}
module.exports = new DB_articles();
