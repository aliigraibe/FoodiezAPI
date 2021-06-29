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
    models.Catagory.hasMany(Ingredient, { foreignKey: "catagoryId", as: "Ingredients" });
    Ingredient.belongsTo(models.Catagory, { foreignKey: "catagoryId" });
  };
  return Ingredient;
};
