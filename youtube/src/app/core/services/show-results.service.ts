import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowResultsService {
  private showResults = new BehaviorSubject(false);

  results = this.showResults.asObservable();

  updateShowResults(showResults: boolean): void {
    this.showResults.next(showResults);
  }
}
