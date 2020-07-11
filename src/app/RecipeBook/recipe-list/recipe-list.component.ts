import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() showDetails = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('testName', 'testDescription', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recipe('testName2', 'testDescription2', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')
  ]

  onShowDetails = (recipe:Recipe) => {
    this.showDetails.emit(recipe)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
