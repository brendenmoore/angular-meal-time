export interface User {
    uid: string;
    email?: string;
}

export class Recipe {
    name: string;
    prepTime?: string;
    cookTime?: string;
    servings?: string;
    directions?: string;
    notes?: string;
    image?: string;
    ingredients?: string[];

    constructor(name:string, prepTime:string='', cookTime:string='', servings:string='', directions:string='', notes:string='', image:string='', ingredients:string[]=[]) {
        this.name = name;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.servings = servings;
        this.directions = directions;
        this.notes = notes;
        this.image = image;
        this.ingredients = ingredients;
    }
}

export class MenuItem {
    index: number;
    recipeName: string;
    date: string;
    timestamp: number;
    label?: Label;
    ingredients?: Array<Ingredient> = [];

    constructor(index: number, recipeName: string, date: string, timestamp: number, label: Label = null, ingredients: Array<Ingredient> = []) {
        this.index = index;
        this.recipeName = recipeName;
        this.date = date;
        this.timestamp = timestamp;
        this.label = label;
        this.ingredients = ingredients;
    }
}

export interface Ingredient {
    name: string,
    isChecked: boolean
}

export interface Label {
    name: string;
    color: string
}

