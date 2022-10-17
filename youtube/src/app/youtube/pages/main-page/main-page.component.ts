import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Response } from '../../../core/models/search-response.model';
import { Item } from '../../../core/models/search-item.model';
import { ShowResultsService } from '../../../core/services/show-results.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [HttpService],
})
export class MainPageComponent implements OnInit {
  title = 'youtube';

  showSorts = false;

  fullData:Response | undefined;

  cardData: Item[] | undefined;

  startShow = false;

  typeSort!: string;

  constructor(private httpService: HttpService, private openResults: ShowResultsService) {}

  ngOnInit(): void {
    this.httpService.arrayItems.subscribe((el: Item[]) => { this.cardData = el; });

    this.openResults.results.subscribe((startShow: boolean) => {
      this.startShow = startShow;
    });
  }

  goApp(bool:boolean): void {
    this.showSorts = bool;
  }

  onChanged(str:string): void {
    this.typeSort = str;
  }
}
