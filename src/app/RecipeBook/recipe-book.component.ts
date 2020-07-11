import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./services/recipe.service";

@Component({
    selector: "app-recipe-book",
    templateUrl: "./recipe-book.component.html",
    styleUrls: ["./recipe-book.component.css"],
    providers: [RecipeService]
})

export class RecipeBookComponent implements OnInit {
    constructor(private recipeService: RecipeService) {}
    selectedRecipe:Recipe
    ngOnInit() {
        this.recipeService.recipeSelected.subscribe(
            (recipe:Recipe) => {
                this.selectedRecipe=recipe
            }
        )
    }
}