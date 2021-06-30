const SequelizeSlugify = require("sequelize-slugify");

module.exports = Recipe = (sequelize, DataTypes) => {
  const Recipe = sequelize.define("Recipe", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    slug: { type: DataTypes.STRING, unique: true },
    image: DataTypes.STRING,
  });
  SequelizeSlugify.slugifyModel(Recipe, {
    source: ["name"],
  });

  Recipe.associate = (models) => {
    Recipe.belongsToMany(models.Ingredient, {
      through: "Recipe_Ingredient",
      foreignKey: "recipeId",
    });
    models.Ingredient.belongsToMany(Recipe, {
      through: "Recipe_Ingredient",
      foreignKey: "ingredientId",
    });
  };

  return Recipe;
};
