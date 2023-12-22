import {Request, Response, NextFunction } from "express";
import { RecipeManager } from "../models/inMemory/recipe.js";
import { RecipeValidation } from "../schema/validation.js";


interface SuccessResponse {
    success: true;
    data: {
      token: string;
      user: object;
    };
  }
  
  interface ErrorResponse {
    success: false;
    data: {
      error: string;
    };
  }

export class recipeController {

    constructor(){

    }

    static async createRecipe(req: Request, res: Response)
    {
        const validate = RecipeValidation(req.body)

        if(!validate.success)
        {
            res.status(400).json({ message: JSON.parse(validate.error.message) })
        }

        const createNewItem = await RecipeManager.createNewRecipe(req.body)

        return res.send(createNewItem)
    }

    static async getAllRecipes(req: Request, res: Response)
    {
        const data = await RecipeManager.getAllRecipes()

        return res.send(data)
    }

    static async getRouteById(req: Request, res: Response)
    {
        return res.send("Not implemented yet")
    }

    static async update(req: Request, res: Response)
    {
        return res.send("Not implemented yet")
    }

    
    static async delete(req: Request, res: Response)
    {
        return res.send("Not implemented yet")
    }

}
