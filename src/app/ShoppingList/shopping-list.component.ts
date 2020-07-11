import { Component, OnInit, OnChanges } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";
import { ShoppinglistService } from "./services/shoppinglist.service";
import { RecipeService } from "../RecipeBook/services/recipe.service";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"],
})

export class ShoppingListComponent implements OnInit {
    ingredients:ingredient[]
    constructor(private shoppingListService: ShoppinglistService, private recipeService: RecipeService) {
        //console.log(recipeService.getRecipes())
    }
    ngOnInit():void{
        this.ingredients = this.shoppingListService.getIngredients()
        this.shoppingListService.ingredientsChanged.subscribe((ingredients:ingredient[])=> {
            this.ingredients = ingredients
        })
    }         
    // ngOnChanges():void {
    //     this.ingredients=this.shoppingListService.getIngredients()
    // }
}