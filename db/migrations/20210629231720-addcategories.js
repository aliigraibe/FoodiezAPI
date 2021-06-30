"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Ingredients",
      "categoryId",
      Sequelize.INTEGER,
      {
        allowNull: false,
        references: {
          model: {
            tableName: "Categories",
          },
          key: "id",
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Ingredients", "categoryId");
  },
};
