import { Component, EventEmitter, Output } from '@angular/core';
import { YoutubeItemService } from '../../services/youtube-item.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  searchValue = '';

  search = false;

  @Output() isSearch = new EventEmitter<boolean>();

  constructor(private youtubeItemService: YoutubeItemService) { }

  onSearch(): void {
    if (this.searchValue.length >= 3) {
      this.search = true;
      this.isSearch.emit(this.search);
      const str = this.searchValue.trim();
      this.youtubeItemService.updateSearchData(str);
    } else {
      this.search = false;
      this.isSearch.emit(this.search);
    }
  }
}
