import { Injectable } from '@angular/core';
import { Item } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeItemService {
  findById(items: Item[], param: string) {
    const data = items.find((el: Item) => el.id === param);
    return data;
  }
}
