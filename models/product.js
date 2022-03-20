const getDb = require('../util/database').getDb;

const Cart = require('./cart');

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const db = getDb();
    // console.log("db", db.collections('products'));
    return db.collection('products').insertOne(this)
      .then(result => {
        console.log("result", result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
