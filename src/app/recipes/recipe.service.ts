import { Recipe } from "./recipe.model"
import { EventEmitter, Output, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>(); 

    recipes: Recipe[] = [
        new Recipe("Mango Juice",
                    "King of all fruits.",
                    "https://images.lifealth.com/uploads/2018/03/mango-juice-1.jpg",
                    [
                        new Ingredient("Mango",2),
                        new Ingredient("Milk",1)
                    ]),
        new Recipe("MacDonald's Burger",
                    "Happy's meal on Sunday for family",
                    "https://image.cnbcfm.com/api/v1/image/106152658-1569589928424pltstill-twitterlinkedin.jpg?v=1569589970&w=678&h=381",
                    [
                        new Ingredient("Buns",10),
                        new Ingredient("Chicken",2)
                    ]),
        new Recipe("Mango Shake",
                    "Mango ka mahina ayeya",
                    "https://images.lifealth.com/uploads/2018/03/mango-juice-1.jpg",
                    [
                        new Ingredient("Mango",2),
                        new Ingredient("Milk",1)
                    ])
        
       ];
    
    constructor(private shoppingService:ShoppingService){}   
    
    getAllRecipes(){
        return this.recipes.slice();
    }
    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingService.addIngredientsToCart(ingredients);
    }
      
}