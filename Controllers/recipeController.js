const express = require("express");
let { Ingredient, Recipe } = require("../db/models");
exports.fetchIngrediens = async (recipeId, next) => {
  try {
    const recipe = await Recipe.findByPk(recipeId);
    return recipe;
  } catch (error) {
    next(error);
  }
};
exports.showRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Ingredient,
        attributes: ["id"],
      },
    });
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

exports.recipeAdd = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};