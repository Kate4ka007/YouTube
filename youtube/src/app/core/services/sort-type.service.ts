import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SortTypeService {
  private sortType = new BehaviorSubject('');

  results = this.sortType.asObservable();

  updateShowResults(sortType: string): void {
    this.sortType.next(sortType);
  }
}
