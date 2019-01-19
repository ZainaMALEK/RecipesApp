import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes : Recipe[] = [new Recipe('Falafels',' miam', 'https://c.pxhere.com/photos/9b/6e/menu_chicken_food_delicious_plate_cooking_cuisine_restaurant-1382403.jpg!d' ) , new Recipe('Falafels',' miam', 'https://c.pxhere.com/photos/9b/6e/menu_chicken_food_delicious_plate_cooking_cuisine_restaurant-1382403.jpg!d' )];

  constructor() { }

  ngOnInit() {
  }

}
