const express = require("express");
const upload = require("../middleware/multer");
let {
  showRecipes,
  fetchRecipe,
  recipeAdd,
} = require("../Controllers/recipeController");

const router = express.Router();

router.param("recipId", async (req, res, next, recipId) => {
  const recips = await fetchRecipe(recipId, next);
  if (recips) {
    req.Recip = recips;
    next();
  } else {
    const err = new Error("recips Not Found");
    err.status = 404;
    next(err);
  }
});
router.post("/", upload.single("image"), recipeAdd);

router.get("/", showRecipes);

module.exports = router;
