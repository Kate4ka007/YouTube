import { Component, Input, OnInit } from '@angular/core';
import { SortTypeService } from 'src/app/core/services/sort-type.service';
import { Item } from '../../../core/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() cardData: Item[] | undefined;

  typeSort!: string;

  constructor(private sortTypeService: SortTypeService) {}

  ngOnInit(): void {
    this.sortTypeService.results.subscribe((data) => { this.typeSort = data; });
  }
}
