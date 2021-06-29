const express = require("express");
let { Catagory ,Ingredient} = require("../db/models");
exports.fetchCatagory = async (catagoryId, next) => {
  try {
    const catagory = await Catagory.findByPk(catagoryId);
    return catagory;
  } catch (error) {
    next(error);
  }
};
exports.showCatagories = async (req, res, next) => {
  try {
    const catagories = await Catagory.findAll({
      attributes: ["id", "name", "image", "slug"],
      include: {
        model: Catagory,
        as: "catagories",

        attributes: ["id"],
      },
    });
    res.json(catagories);
  } catch (error) {
    next(error);
  }
};


exports.catagoryAdd = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
      console.log(req.body);
    }
    const newCatagory = await Catagory.create(req.body);
    res.status(201).json(newCatagory);
  } catch (error) {
    next(error);
  }
};
exports.ingredientAdd = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const newIngredient = await Ingredient.create(req.body);
    res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
};
