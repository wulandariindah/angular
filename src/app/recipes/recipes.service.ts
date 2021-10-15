import { Injectable } from '@angular/core';
import { Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Spaghetti',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'nasigoreng',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Nasi_goreng_sari_laut.jpg',
      ingredients: ['kerupuk', 'telur', 'esteh']
    }
  ];


  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }
  // return a single recipe for an id
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => recipe.id === recipeId)
      };
    }
 }
