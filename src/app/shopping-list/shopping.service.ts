import {Ingredient} from "../shared/Ingredient.model"
import { EventEmitter } from '@angular/core';

export class ShoppingService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient("Honey",2)
        
      ];

      getAllIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
          
      }

      addIngredientsToCart(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
        
    }
}