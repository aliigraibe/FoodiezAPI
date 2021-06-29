const express = require("express");
const upload = require("../middleware/multer");
const router = express.Router();
let {
  ingredientAdd,
  catagoryAdd,
  showCatagories,
  fetchCatagory,
} = require("../Controllers/catagoriesControllers");


router.param("catagoryId", async (req, res, next, catagoryId) => {
  const catagories = await fetchCatagory(catagoryId, next);
  if (catagories) {
    req.Catagory = catagories;
    next();
  } else {
    const err = new Error("catagories Not Found");
    err.status = 404;
    next(err);
  }
});

router.post("/:catagoryId/ingredients", upload.single("image"), ingredientAdd);

router.get("/", showCatagories);

router.post("/", upload.single("image"), catagoryAdd);



module.exports = router;
