import Router  from "express";
import { recipeController } from "../controllers/recipe-controller.js";

const route = Router();

//BASE => http://localhost:3000/recipe/

route.get("/", recipeController.getAllRecipes)
route.post("/", recipeController.createRecipe)


export default route