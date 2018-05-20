import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Sambar", "A delicious indian curry","https://www.vegrecipesofindia.com/wp-content/uploads/2010/09/kerala-sambar-recipe26.jpg"),
    new Recipe("Dosai", "An Indian food", "http://www.mustgaze.com/wp-content/uploads/2017/07/Dosa-or-Dosai.png"),
    new Recipe("Gulab Jamun", "A delicious indian sweet", "https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
