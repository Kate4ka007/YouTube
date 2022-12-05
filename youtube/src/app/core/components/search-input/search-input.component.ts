import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { YoutubeItemService } from '../../services/youtube-item.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  public myGroup = new FormGroup({
    searchInput: new FormControl(''),
  });

  ngOnInit() {
    this.myGroup.get('searchInput')!.valueChanges.pipe(
      filter((item) => item!.length >= 3),
      debounceTime(800),
      distinctUntilChanged(),
    ).subscribe((searchString) => {
      this.youtubeItemService.updateSearchData(searchString!);
    });
  }

  @Output() isSearch = new EventEmitter<boolean>();

  constructor(private youtubeItemService: YoutubeItemService) { }
}
