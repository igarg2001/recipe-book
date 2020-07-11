import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from '../services/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) name:ElementRef
  @ViewChild('amountInput', {static: true}) amount:ElementRef
  //@Output() ingredientAdded = new EventEmitter<ingredient>()
  constructor(private shoppingListService: ShoppinglistService) {}
  addIngredient = () => {
    //console.log("hi")
    event.preventDefault()
    const newName:string = this.name.nativeElement.value
    const newAmt:number = +this.amount.nativeElement.value 
    //const newIng:ingredient = new ingredient(newName, newAmt)
    this.shoppingListService.addIngredient(newName, newAmt)
    //this.ingredientAdded.emit(newIng)
  }

  ngOnInit(): void {
  }

}
