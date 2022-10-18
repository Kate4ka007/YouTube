import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Item } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeItemService {
  private inputValue = new ReplaySubject<string>(1);

  search = this.inputValue.asObservable();

  updateSearchData(value: string): void {
    this.inputValue.next(value);
  }

  findById(items: Item[], param: string) {
    const data = items.find((el: Item) => el.id === param);
    return data;
  }
}
