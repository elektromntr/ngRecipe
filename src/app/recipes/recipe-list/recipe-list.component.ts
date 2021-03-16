import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lasagne', 'Try this at home', 'https://kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/lasagne_bolognese_2.jpg'),
    new Recipe('Spaghetti', 'Try this at home', 'http://www.warzywizm.pl/wp-content/uploads/2020/01/A-WYBRANE-P1128074-auto-30-scaled.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
