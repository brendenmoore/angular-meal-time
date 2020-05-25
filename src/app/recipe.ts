import { Ingredient } from "./ingredient";

export interface Recipe {
  id: number;
  name: string;
  prepTime?: number;
  cookTime?: number;
  ingredients?: Ingredient[];
  directions?: string;
  notes?: string;
}
