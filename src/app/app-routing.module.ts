import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowItemComponent} from "./views/show-item/show-item.component";
import {ShowListComponent} from "./views/show-list/show-list.component";
import {SeasonsComponent} from "./views/seasons/seasons.component";
import {MyNavComponent} from "./views/my-nav/my-nav.component";

const routes: Routes = [
  //{path: '',component: MyNavComponent},
  {path: 'seasons/:id', component: SeasonsComponent},
  {path: 'search/:query', component: ShowListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShowListComponent,SeasonsComponent]
