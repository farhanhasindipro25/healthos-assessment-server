const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Necessary Middlewares
app.use(cors());
app.use(express.json());

// API for running the server
app.get("/", (req, res) => {
  res.send("Server running.");
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}.`);
});
