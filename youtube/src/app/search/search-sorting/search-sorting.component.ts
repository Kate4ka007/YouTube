import { Component, EventEmitter, Output } from '@angular/core';

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

  sortBy(str: string) {
    this.isSort = str;
    if (str === 'date' && this.orderDate === true) {
      this.isSort = 'date';
    } else if (str === 'date' && this.orderDate === false) {
      this.isSort = 'date-down';
    } else if (str === 'count' && this.orderCount === true) {
      this.isSort = 'count';
    } else if (str === 'count' && this.orderCount === false) {
      this.isSort = 'count-down';
    }
    this.typeSort.emit(this.isSort);
  }

  sortByWord() {
    if (this.word) {
      this.typeSort.emit(this.word);
    }
  }
}
