import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ingredient } from "../../shared/ingredient.model";
import { ShoppinglistService } from "../../ShoppingList/services/shoppinglist.service";
@Injectable({providedIn: "root"})
export class RecipeService {
   private recipes: Recipe[] = [
        new Recipe(
        'Pizza', 
        'A Delicious Pizza', 
'https://www.kingarthurflour.com/sites/default/files/2020-03/hawaiian-pizza.jpg',  
[
    new ingredient("cheese", 1),
    new ingredient('sweet corn', 1),
    new ingredient('onion', 1)
]    ),
        new Recipe(
        'Burger', 
        'Big Fat Burgers',
            'https://media1.s-nbcnews.com/i/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.jpg',
        [
            new ingredient("cheese", 1),
            new ingredient('tikki', 1),
            new ingredient('onion', 1)
        ])
      ]
    getRecipes = () => {
        return this.recipes.slice()
    }
    recipeSelected = new EventEmitter<Recipe>()
    //toShoppingList = new EventEmitter<ingredient[]>()
    constructor(private slService:ShoppinglistService) {}
    toShoppingList(ingredients: ingredient[]) {
        this.slService.addIngredientsFromRecipe(ingredients)
        console.log(this.slService.getIngredients())
    }

}