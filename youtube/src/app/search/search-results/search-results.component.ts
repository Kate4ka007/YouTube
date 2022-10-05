import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  @Input() cardData: Item[] | undefined;

  @Input() typeSort!: string;

  ngOnInit(): void {
    console.log('results', this.cardData);
  }
}
