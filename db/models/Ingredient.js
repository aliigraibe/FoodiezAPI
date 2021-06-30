const SequelizeSlugify = require("sequelize-slugify");

module.exports = Ingredient = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define("Ingredient", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    slug: { type: DataTypes.STRING, unique: true },
    image: DataTypes.STRING,
  });
  SequelizeSlugify.slugifyModel(Ingredient, {
    source: ["name"],
  });

  Ingredient.associate = (models) => {
    models.Category.hasMany(Ingredient, {
      foreignKey: "categoryId",
      as: "ingredients",
    });
    Ingredient.belongsTo(models.Category, { foreignKey: "categoryId" });
    
  };
  return Ingredient;
};
