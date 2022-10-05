import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.scss'],
})
export default class SearchSortingComponent {
  isSort!: string;

  @Output() typeSort = new EventEmitter<string>();

  sortBy(str: string) {
    this.isSort = str;
    this.typeSort.emit(this.isSort);
  }
}
