import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingService } from "./shopping.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getAllIngredients();
    this.shoppingService.ingredientsChanged
                        .subscribe(
                          (ingredients:Ingredient[]) =>{
                            this.ingredients = ingredients;
                          }
                        );
  }
  
  onIngredientAdded(ingredient :Ingredient){
    //this.shoppingService.addIngredient(ingredient);
    console.log("IngredientList: "+ingredient);
  }

}
