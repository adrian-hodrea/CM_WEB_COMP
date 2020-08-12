import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites-menu/pages/favorites/favorites.component';
import { FavoriteBtnComponent } from './favorites-menu/pages/favorites/components/favorite-btn/favorite-btn.component';
import { FavoriteMenuComponent } from './favorites-menu/pages/favorites/components/favorite-menu/favorite-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    FavoriteBtnComponent,
    FavoriteMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
