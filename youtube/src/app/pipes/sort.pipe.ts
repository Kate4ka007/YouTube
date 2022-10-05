import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../search/models/search-item.model';

@Pipe({
  name: 'sort',
})
export default class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this, consistent-return
  transform(value: Item[] | undefined, args?: string): any {
    // eslint-disable-next-line default-case
    if (value) {
      // eslint-disable-next-line default-case
      switch (args) {
        case 'date': return value.sort((a: Item, b: Item) => new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime());
          break;
        case 'count': return value.sort((a: Item, b: Item) => +a.statistics.viewCount - +b.statistics.viewCount);
          break;
        case 'word': return value.sort((a: Item, b: Item) => +a.statistics.commentCount - +b.statistics.commentCount);
          break;
        default: return value;
      }
    }
  }
}
