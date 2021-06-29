const express = require("express");
let { Ingredient } = require("../db/models");
exports.fetchIngrediens = async (ingredientId, next) => {
  try {
    const ingredient = await Ingredient.findByPk(ingredientId);
    return ingredient;
  } catch (error) {
    next(error);
  }
};
exports.showIngredients = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
};
