import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../search/models/search-item.model';

@Pipe({
  name: 'sort',
})
export default class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this, consistent-return
  transform(value: Item[] | undefined, args?: string): any {
    if (value) {
      if (args) {
        switch (args) {
          case 'date': return value.sort((a: Item, b: Item) => new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime());
          case 'date-down': return value.sort((a: Item, b: Item) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
          case 'count': return value.sort((a: Item, b: Item) => +a.statistics.viewCount - +b.statistics.viewCount);
          case 'count-down': return value.sort((a: Item, b: Item) => +b.statistics.viewCount - +a.statistics.viewCount);
          default: return value.filter((a: Item) => a.snippet.tags.join(' ').includes(args!));
        }
      } else {
        return value;
      }
    }
  }
}