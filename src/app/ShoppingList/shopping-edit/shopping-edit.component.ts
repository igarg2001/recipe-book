import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) name:ElementRef
  @ViewChild('amountInput', {static: true}) amount:ElementRef
  @Output() ingredientAdded = new EventEmitter<ingredient>()
  addIngredient = () => {
    event.preventDefault()
    const newName:string = this.name.nativeElement.value
    const newAmt:number = +this.amount.nativeElement.value 
    const newIng:ingredient = new ingredient(newName, newAmt)
    this.ingredientAdded.emit(newIng)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
