import { Component, OnInit } from '@angular/core';
import { FavoritesMenu } from '../../models';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favoritesMenuList:FavoritesMenu[];
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.favoritesService.getFavoritesMenu()
      .subscribe(menu => this.favoritesMenuList = menu);
  }

}
