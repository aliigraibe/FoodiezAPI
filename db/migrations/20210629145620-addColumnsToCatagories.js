'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Ingredients", "catagoryId", Sequelize.INTEGER, {
      allowNull: false,
      references: {
        model: {
          tableName: "Catagories",
        },
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.removeColumn('Ingredients',"catagoryId");
     
  }
};
