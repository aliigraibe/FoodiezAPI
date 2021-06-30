const express = require("express");
const path = require("path");
const cors = require("cors");

const ingredientsRoutes = require("./routes/ingredientsRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/categories", categoriesRoutes);
app.use("/ingredients", ingredientsRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});
app.use((err, req, res, next) => {
  res.status(err.status ?? 500).json({
    message: err.message ?? "Internal Server Error",
  });
});
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`The application is running on${PORT}`);
});
