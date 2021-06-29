"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Ingredients", "name", Sequelize.STRING, {
      allowNull: false,
      unique: true,
    });

    await queryInterface.addColumn("Ingredients", "slug", Sequelize.STRING, {
      unique: true,
    });

    await queryInterface.addColumn(
      "Ingredients",
      "image",
      Sequelize.STRING,
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Ingredients", "name");
    await queryInterface.removeColumn("Ingredients", "slug");
    await queryInterface.removeColumn("Ingredients", "image");
  },
};
