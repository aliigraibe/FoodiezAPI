const express = require("express");
const upload = require("../middleware/multer");
const router = express.Router();
let {
  ingredientAdd,
  categoryAdd,
  showCategories,
  fetchCategory,
} = require("../Controllers/categoriesControllers");

router.param("categoryId", async (req, res, next, categoryId) => {
  const categories = await fetchCategory(categoryId, next);
  if (categories) {
    req.Category = categories;
    next();
  } else {
    const err = new Error("categories Not Found");
    err.status = 404;
    next(err);
  }
});

router.post("/:categoryId/ingredients", upload.single("image"), ingredientAdd);

router.get("/", showCategories);

router.post("/", upload.single("image"), categoryAdd);

module.exports = router;
