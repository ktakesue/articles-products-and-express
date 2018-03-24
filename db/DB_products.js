class DB_products {
  constructor() {
    this.storage = [];
    this.idNum = 1;
    this.exampleProducts();
  }

  exampleProducts() {
    this.storage.push({
      id: this.idNum++,
      name: "penguins",
      price: 10000,
      inventory: 4
    });
    this.storage.push({
      id: this.idNum++,
      name: "lychee",
      price: 20,
      inventory: 69
    });
  }

  getAllProducts() {
    return this.storage.slice();
  }

  getProductbyId(id) {
    let result;
    console.log("id", id);
    this.storage.forEach(product => {
      if (product.id === id) {
        result = product;
      }
    });
    console.log("result", result);
    return result;
  }

  createNewProduct(data) {
    this.storage.push({
      id: this.idNum++,
      name: data.name,
      price: data.price,
      inventory: data.inventory
    });
    this.idNum++;
    console.log("new product successful");
  }

  editProductbyId(id) {}

  deleteProductbyId(id) {
    this.storage.slice().forEach((product, idx) => {
      if (product.id === id) {
        this.storage.splice(idx, 1);
      }
    });
  }
}
module.exports = new DB_products();
