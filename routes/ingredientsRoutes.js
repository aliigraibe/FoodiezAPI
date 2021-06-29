const express = require("express");
const upload = require("../middleware/multer");
let {
  showIngredients,
  fetchIngredients,
} = require("../Controllers/ingredientsController");

const router = express.Router();

router.param("ingredientId", async (req, res, next, ingredientId) => {
  const ingredients = await fetchIngredients(ingredientId, next);
  if (ingredients) {
    req.Ingredient = ingredients;
    next();
  } else {
    const err = new Error("ingredients Not Found");
    err.status = 404;
    next(err);
  }
});
router.get("/", showIngredients);

module.exports = router;
