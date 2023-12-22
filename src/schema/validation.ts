import { z } from "zod";
import { Recipe } from "../types";

const recipeSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  ingredients: z.array(
    z.object({
      quantity: z.string(),
      name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      }),
      type: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      }),
    })
  ),
  steps: z.string().array().nonempty(),
  imageURL: z.string(),
});

export function RecipeValidation(data: Recipe) {
  console.info(data);
  return recipeSchema.safeParse(data);
}
