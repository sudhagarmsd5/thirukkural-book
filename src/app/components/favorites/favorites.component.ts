import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'thirukkural-favorites',
  standalone: true,
  imports: [CommonModule],
  template: ` <p class="txt">Add to favorites feature will be coming soon</p> `,
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
