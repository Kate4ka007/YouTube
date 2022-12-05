import { Item } from './search-item.model';

export interface YoutubeResponse <ItemType extends Item = Item> {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ItemType[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
