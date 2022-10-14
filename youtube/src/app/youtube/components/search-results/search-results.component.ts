import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { SortTypeService } from 'src/app/core/services/sort-type.service';
import { Item } from '../../../core/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  cardData: Item[] | undefined;

  typeSort!: string;

  constructor(private sortTypeService: SortTypeService, private httpService: HttpService) {}

  ngOnInit(): void {
    this.sortTypeService.results.subscribe((data) => { this.typeSort = data; });
    this.httpService.getData().subscribe({
      next: (data:any) => {
        this.cardData = data.items;
      },
    });
  }
}
