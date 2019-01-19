import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../shared/Ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[]= [new Ingredient( 'Eggs', 3), new Ingredient('Apples', 6)];
  constructor() { }

  ngOnInit() {
  }

}
