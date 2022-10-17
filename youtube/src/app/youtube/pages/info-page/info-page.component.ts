import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeItemService } from 'src/app/core/services/youtube-item.service';
import { Item } from '../../../core/models/search-item.model';
import { HttpService } from '../../../core/services/http.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
})
export class InfoPageComponent implements OnInit {
  data!: Item[];

  item!: Item | undefined;

  param: string = '';

  constructor(
    private dataService: HttpService,
    private activatedRoute: ActivatedRoute,
    private youtubeItemService: YoutubeItemService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const date = params['id'];
      this.param = date;
    });

    this.dataService.getFullData();
    this.dataService.arrayItems.subscribe((el: Item[]) => {
      this.data = el;
      this.item = this.youtubeItemService.findById(this.data, this.param);
    });
  }
}
