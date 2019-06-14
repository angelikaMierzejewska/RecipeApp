import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Recipe } from "../../model/Recipe";

@Component({
  selector: "app-recipes-search",
  templateUrl: "./recipes-search.component.html",
  styleUrls: ["./recipes-search.component.scss"]
})
export class RecipesSearchComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private http: HttpClient) {}

  ngOnInit() {}

  searchByIngredient(term: string): void {
    this.recipeService.searchByIngredient(term).subscribe(data => {
      console.log(data);
      this.recipes = data.results;
    });
  }

  searchByDish(term: string): void {
    this.recipeService.searchByDish(term).subscribe(data => {
      this.recipes = data.results;
    });
  }
}
