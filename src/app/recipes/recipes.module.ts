import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipesSearchComponent } from "./recipes-search/recipes-search.component";
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
  declarations: [RecipesSearchComponent],
  imports: [CommonModule, RecipesRoutingModule]
})
export class RecipesModule {}
