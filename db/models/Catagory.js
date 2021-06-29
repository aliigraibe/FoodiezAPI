const SequelizeSlugify = require("sequelize-slugify");

module.exports = Catagory = (sequelize, DataTypes) => {
  const Catagory = sequelize.define("Catagory", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    slug: { type: DataTypes.STRING, unique: true },
    image: DataTypes.STRING,
  });
  SequelizeSlugify.slugifyModel(Catagory, {
    source: ["name"],
  });

  return Catagory;
};
