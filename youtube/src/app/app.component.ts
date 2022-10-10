import { Component, OnInit } from '@angular/core';
import HttpService from './services/http.service';
import { Response } from './search/models/search-response.model';
import { Item } from './search/models/search-item.model';

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

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe({
      next: (data:Response) => {
        this.fullData = data;
        this.cardData = data.items;
      },
    });
  }

  goApp(bool:boolean): void {
    this.showSorts = bool;
  }

  showResults(bool:boolean): void {
    this.startShow = bool;
  }

  onChanged(str:string): void {
    this.typeSort = str;
  }
}
