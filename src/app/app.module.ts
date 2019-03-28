import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MyNavComponent } from './views/my-nav/my-nav.component';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { SearchComponent } from './views/search/search.component';
import { SeasonsComponent } from './views/seasons/seasons.component';
import { ShowItemComponent } from './views/show-item/show-item.component';
import { ShowListComponent } from './views/show-list/show-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    SearchComponent,
    SeasonsComponent,
    routingComponents,
    ShowItemComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
