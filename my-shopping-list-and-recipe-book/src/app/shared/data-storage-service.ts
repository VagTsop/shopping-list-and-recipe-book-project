import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class  DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}
    

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
          .put(
              'https://shopping-list-recipe-boo-f8884.firebaseio.com/recipes.json',
         recipes 
     )
        
     .subscribe(response =>{
        console.log(response);
     });
    }

    fetchRecipes() {
        this.http
        .get<Recipe[]>('https://shopping-list-recipe-boo-f8884.firebaseio.com/recipes.json')
        .subscribe(recipes => {
           console.log(recipes);
           this.recipeService.setRecipes(recipes);
        })
    }

}