import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'thirukkural-search',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      search works!
    </p>
  `,
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
