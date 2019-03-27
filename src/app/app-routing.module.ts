import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowItemComponent} from "./views/show-item/show-item.component";
import {ShowListComponent} from "./views/show-list/show-list.component";

const routes: Routes = [
  {path: 'show/:id', component: ShowItemComponent},
  {path: 'search/:query', component: ShowListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShowItemComponent,ShowListComponent]
