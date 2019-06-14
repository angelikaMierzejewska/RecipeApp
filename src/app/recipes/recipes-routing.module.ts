import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesSearchComponent } from "./recipes-search/recipes-search.component";

const routes: Routes = [
  {
    path: "",
    component: RecipesSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
