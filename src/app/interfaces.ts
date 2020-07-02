
export interface User {
    uid: string;
    email?: string;
}

export interface Recipe {
    name: string;
    prepTime?: string;
    cookTime?: string;
    servings?: string;
    directions?: string;
    notes?: string;
    image?: string;
    ingredients?: string[];
}

export interface Menu {
    index: number,
    recipeName: string,
    label?: Label,
    ingredients?: Array<Ingredient> 
}

export interface Label {
    name: string;
    color: string
}

export interface Ingredient {
    name: string,
    isChecked: boolean
}