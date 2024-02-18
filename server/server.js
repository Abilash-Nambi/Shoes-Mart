const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const PORT = 7000;

let productList = require("./api.json");
const slicedProducts = productList.sneakers.slice(0, 50);

app.get("/api/products", (req, res) => {
  res.status(200).json(slicedProducts);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;

  const filteredProduct = slicedProducts.filter((data) => data.slug === id);

  res.status(200).json(filteredProduct);
});

app.listen(PORT, () => console.log(`you server is runnning at ${PORT}`));
