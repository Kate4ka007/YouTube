import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Item } from '../../../core/models/search-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [HttpService],
})
export class MainPageComponent implements OnInit {
  title = 'youtube';

  showSorts = false;

  cardData: Item[] | undefined;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.arrayItems.subscribe((el: Item[]) => { this.cardData = el; });
  }
}
