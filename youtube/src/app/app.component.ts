import { Component, OnInit } from '@angular/core';
import { HttpService } from './core/services/http.service';
import { Response } from './core/models/search-response.model';
import { Item } from './core/models/search-item.model';
import { ShowResultsService } from './core/services/show-results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService],
})
export class AppComponent implements OnInit {
  title = 'youtube';

  showSorts = false;

  fullData:Response | undefined;

  cardData: Item[] | undefined;

  startShow = false;

  typeSort!: string;

  constructor(private httpService: HttpService, private openResults: ShowResultsService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe({
      next: (data:Response) => {
        this.fullData = data;
        this.cardData = data.items;
      },
    });

    this.openResults.results.subscribe((startShow: boolean) => {
      this.startShow = startShow;
    });
  }

  goApp(bool:boolean): void {
    this.showSorts = bool;
  }

  /*   showResults(bool:boolean): void {
    this.startShow = bool;
  } */

  onChanged(str:string): void {
    this.typeSort = str;
  }
}
