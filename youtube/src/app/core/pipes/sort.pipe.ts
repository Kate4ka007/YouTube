import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/search-item.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this, consistent-return
  transform(value: Item[] | undefined, args?: string): any {
    if (value) {
      const values = [...value];
      if (args) {
        switch (args) {
          case 'date': return values.sort((a: Item, b: Item) => new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime());
          case 'date-down': return values.sort((a: Item, b: Item) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
          case 'count': return values.sort((a: Item, b: Item) => +a.statistics.viewCount - +b.statistics.viewCount);
          case 'count-down': return values.sort((a: Item, b: Item) => +b.statistics.viewCount - +a.statistics.viewCount);
          default: return values.filter((a: Item) => (`${a.snippet.tags.join(' ')} ${a.snippet.description} ${a.snippet.channelTitle}`).toLowerCase().includes(args!.toLowerCase()));
        }
      } else {
        return values;
      }
    }
  }
}
