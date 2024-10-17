require("dotenv").config();
const express = require("express");
const cors = require("cors");

const customers = require("./routes/customers.js")

const app = express();
const PORT = process.env.PORT || 8000; // Use environment variable or default to 3000
const db = require("./models");
const Customer = require("./models/Customer");

app.use((cors()));
app.use(express.json());

// Sync database
db.sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((error) => console.log('Error syncing database:', error));

app.use("/customers", customers)

app.get("/message", (req, res) => {
    res.json({message: "Hello from server!"});
})

app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}")
});