import { Component, OnDestroy, OnInit } from '@angular/core';
import HttpService from './services/http.service';
import { Response } from './search/models/search-response.model';
import { Item } from './search/models/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService],
})
export default class AppComponent implements OnInit, OnDestroy {
  title = 'youtube';

  showSorts = false;

  fullData:Response | undefined;

  cardData: Item[] | undefined;

  http: any;

  startShow = false;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.http = this.httpService.getData();
    this.http.subscribe({
      next: (data:Response) => {
        this.fullData = data;
        this.cardData = data.items;
        console.log('carddata', this.cardData);
      },
    });
  }

  goApp(bool:boolean): void {
    this.showSorts = bool;
  }

  showResults(bool:boolean): void {
    this.startShow = bool;
    console.log('show', this.startShow);
  }

  ngOnDestroy(): void {
    this.http.unsubscribe();
  }
}
