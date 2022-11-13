import {Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'thirukkural-page-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="txt">
      page-not-found works!
    </p>
  `,
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
