import { Component, OnInit, Input } from '@angular/core';
import { FavoriteBtn } from '../../../../models';

@Component({
  selector: 'app-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.scss']
})
export class FavoriteBtnComponent implements OnInit {
  @Input() public btn:FavoriteBtn;
  constructor() { }

  ngOnInit(): void {
  }

}
