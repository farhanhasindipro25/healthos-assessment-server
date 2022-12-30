const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Necessary Middlewares
app.use(cors());
app.use(express.json());

// Locating the JSON files and storing them in variables
const categories = require("./data/categories.json");
const products = require("./data/products.json");

// API for reading data of all product categories
app.get("/product-categories", (req, res) => {
  res.send(categories);
});

// API for reading data of all products
app.get("/products", (req, res) => {
  res.send(products);
});

// API for reading products from a specific category as per its ID
app.get("/product-categories/:id", (req, res) => {
  const id = req.params.id;
  const selectedCategory = products.filter(
    (product) => product.categoryId === id
  );
  //   console.log(selectedCategory);
  res.send(selectedCategory);
});

// API for reading product details of a specific product.
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const selectedProduct = products.find((product) => product._id === id);
  console.log(selectedProduct);
  res.send(selectedProduct);
});

// API for running the server
app.get("/", (req, res) => {
  res.send("String Symphony Server running.");
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}.`);
});
