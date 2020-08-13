import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class  DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}
    

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return  this.http.put('https://shopping-list-recipe-boo-f8884.firebaseio.com/recipes.json',
         recipes 
     )
        
     .subscribe(response =>{
        console.log(response);
     });
    }
}