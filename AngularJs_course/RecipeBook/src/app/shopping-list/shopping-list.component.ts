import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('Idli gunpowder',"250 mg"),
    new Ingredient('Onions', 4),
    new Ingredient('Sugar', "100 mg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
