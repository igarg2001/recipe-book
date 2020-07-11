import { Injectable, EventEmitter } from "@angular/core";
import { ingredient } from "../../shared/ingredient.model";

@Injectable({providedIn:"root"})
export class ShoppinglistService {
    ingredientsChanged = new EventEmitter<ingredient[]>()
    private ingredients:ingredient[] = [
            new ingredient("cheese", 5),
            new ingredient("meat", 2)
    ]
    getIngredients():ingredient[] {
        //console.log(this.ingredients)
        return this.ingredients.slice()
    }
    addIngredient(name:string, amount:number):void {
        this.ingredients.push(new ingredient(name, amount))
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
    addIngredientsFromRecipe(ingredients: ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
        console.log(this.ingredients)
    }
}