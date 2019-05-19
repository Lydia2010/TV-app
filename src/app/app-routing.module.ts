// routing file.  Defines routes to navigate between components
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowListComponent} from "./views/show-list/show-list.component";
import {SeasonsComponent} from "./views/seasons/seasons.component";
import {MyNavComponent} from "./views/my-nav/my-nav.component";
import {EpisodeComponent} from "./views/episode/episode.component";

const routes: Routes = [
  //{path: '',component: MyNavComponent},
  {path: 'seasons/:id', component: SeasonsComponent}, // route to seasons component
  {path: 'search/:query', component: ShowListComponent}, // route to show list component
  {path: 'episodes/:id', component: EpisodeComponent} // route to episodes component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShowListComponent,SeasonsComponent]
