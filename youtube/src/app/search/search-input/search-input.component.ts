import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export default class SearchInputComponent {
  angular = '';

  search = false;

  @Output() isSearch = new EventEmitter<boolean>();

  onSearch() {
    if (this.angular) {
      this.search = true;
      console.log('search', this.search);
      console.log('input', this.angular);
      this.isSearch.emit(this.search);
    } else {
      this.search = false;
      this.isSearch.emit(this.search);
    }
  }
}
