import  Logger  from "pino";

import { createRequire } from 'node:module'
import { Recipe } from "../../types";
import { randomUUID } from "node:crypto";

const require = createRequire(import.meta.url)
const readJson = (filename: string) => require(filename)

const jsonRecipe = await readJson("../../recipe.json")

const logger = Logger()


export class RecipeManager{
    
    constructor() {
       
    }

    static async getAllRecipes():Promise<Recipe[]>{

        try {
            logger.child({ action: "getAllRecipes", success: true, jsonRecipe }).info("Recipes retrieved successfully");
            return jsonRecipe as Recipe[]

        } catch (error) {
            
            logger.child({ action: "getAllRecipes", success: false, error }).info("Error retrieving recipes");
            throw error;

        }
    
    }    

    static async createNewRecipe(data: Recipe) : Promise<Recipe>
    {
        const newItem = {
            id: randomUUID,
            ...data
        }

        logger.child({action: "createNewRecipe", success: true, newItem}).info("New item created")

        jsonRecipe.push(newItem)

        return newItem 

    }

}