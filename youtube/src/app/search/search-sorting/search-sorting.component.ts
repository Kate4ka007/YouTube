import { Component, EventEmitter, Output } from '@angular/core';
import SortType from '../models/search-sorting.model';

@Component({
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.scss'],
})
export default class SearchSortingComponent {
  isSort!: string;

  word: string = '';

  orderDate = true;

  orderCount = true;

  @Output() typeSort = new EventEmitter<string>();

  sortBy(str: string): void {
    this.isSort = str;
    if (str === SortType.date && this.orderDate === true) {
      this.isSort = SortType.date;
    } else if (str === SortType.date && this.orderDate === false) {
      this.isSort = SortType.dateDown;
    } else if (str === SortType.count && this.orderCount === true) {
      this.isSort = SortType.count;
    } else if (str === SortType.count && this.orderCount === false) {
      this.isSort = SortType.countDown;
    }
    this.typeSort.emit(this.isSort);
  }

  sortByWord(): void {
    if (this.word) {
      this.typeSort.emit(this.word);
    }
  }
}
