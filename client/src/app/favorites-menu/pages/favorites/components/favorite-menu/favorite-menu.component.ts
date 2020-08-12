import { Component, OnInit, Input } from '@angular/core';
import { FavoritesMenu } from '../../../../models';

@Component({
  selector: 'app-favorite-menu',
  templateUrl: './favorite-menu.component.html',
  styleUrls: ['./favorite-menu.component.scss']
})
export class FavoriteMenuComponent implements OnInit {
  @Input() public favoritesMenu:FavoritesMenu
  constructor() { }

  ngOnInit(): void {
  }

}
