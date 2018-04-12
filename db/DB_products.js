const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "products_user",
    password: "password",
    database: "products_app"
  }
});

class DB_products {
  constructor() {
    this.storage = [];
    // this.idNum = 1;
    // this.exampleProducts();
  }

  // exampleProducts() {
  //   this.storage.push({
  //     id: this.idNum++,
  //     name: "penguins",
  //     price: 10000,
  //     inventory: 4
  //   });
  //   this.storage.push({
  //     id: this.idNum++,
  //     name: "lychee",
  //     price: 20,
  //     inventory: 69
  //   });
  // }

  getAllProducts() {
    // return this.storage.slice();
    return knex.raw("SELECT * FROM product").then(data => {
      return data.rows;
    });
  }

  getProductbyId(id) {
    // let result;
    // // console.log("id", id);
    // this.storage.forEach(product => {
    //   if (product.product_id === product_id) {
    //     result = product;
    //   }
    // });
    // // console.log("result", result);
    // return result;

    return (
      knex
        .raw(`SELECT * FROM product WHERE product_id = ${id}`)
        // .raw("SELECT * FROM article")
        // .where("product_id", "=", id)
        .then(data => {
          console.log("getPRODUCTbyID", data.rows);
          return data.rows;
        })
    );
  }

  createNewProduct(data) {
    // this.storage.push({
    //   product_id: this.idNum++,
    //   name: data.name,
    //   price: Number(data.price),
    //   inventory: Number(data.inventory)
    // });
    // console.log("new product successful", this.storage);

    return knex("product")
      .insert({
        name: data.name,
        price: Number(data.price),
        inventory: Number(data.inventory)
      })
      .then(data => {
        // console.log("neww article?", data);
        return data;
      });
  }

  editProductbyId(data, element) {
    this.storage.forEach(product => {
      if (product.product_id === Number(data.product_id)) {
        product.name = element.name;
        product.price = Number(element.price);
        product.inventory = Number(element.inventory);
      }
    });
    console.log("editted product successful", this.storage);
    return this.storage;
  }

  deleteProductbyId(data) {
    this.storage.slice().forEach((product, index) => {
      if (product.product_id === Number(data.product_id)) {
        this.storage.splice(index, 1);
      }
    });
    console.log("delete product successful", this.storage);
    return this.storage;
  }
}
module.exports = new DB_products();
