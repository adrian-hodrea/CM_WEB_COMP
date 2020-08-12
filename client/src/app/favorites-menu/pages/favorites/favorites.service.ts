import { Injectable } from '@angular/core';
import { FavoritesMenu } from '../../models';
import { favoritesMenuData } from '../../favBtnData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor() { }

  getFavoritesMenu(): Observable<FavoritesMenu[]> {
    return of(favoritesMenuData);
  }
}
