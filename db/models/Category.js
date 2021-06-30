const SequelizeSlugify = require("sequelize-slugify");

module.exports = Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    slug: { type: DataTypes.STRING, unique: true },
    image: DataTypes.STRING,
  });
  SequelizeSlugify.slugifyModel(Category, {
    source: ["name"],
  });

  return Category;
};
