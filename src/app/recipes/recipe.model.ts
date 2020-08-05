import { Ingredient } from '../shared/Ingredient.model';

export class Recipe{
    public name: string;
    public description:string;
    public imagePath:string;
    public ingredients: Ingredient[];

    constructor(name:string, desc:string, imageurl:string,ingredient:Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imageurl;
        this.ingredients=ingredient;
    }

}