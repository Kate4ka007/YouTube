import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private dataService: HttpService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const date = params['id'];
      this.param = date;
    });
    this.dataService.getData().subscribe((data) => {
      this.data = data.items;
      this.item = this.data.find((el: Item) => el.id === this.param);
    });
  }
}
