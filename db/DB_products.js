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
    // console.log("id", id);
    this.storage.forEach(product => {
      if (product.id === id) {
        result = product;
      }
    });
    // console.log("result", result);
    return result;
  }

  createNewProduct(data) {
    this.storage.push({
      id: this.idNum++,
      name: data.name,
      price: Number(data.price),
      inventory: Number(data.inventory)
    });
    this.idNum++;
    console.log("new product successful");
  }

  editProductbyId(data, element) {
    this.storage.forEach(product => {
      if (product.id === Number(data.id)) {
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
      if (product.id === Number(data.id)) {
        this.storage.splice(index, 1);
      }
    });
    console.log("delete product successful", this.storage);
    return this.storage;
  }
}
module.exports = new DB_products();
