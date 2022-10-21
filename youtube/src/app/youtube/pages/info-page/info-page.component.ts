import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import getRandomNumber from 'src/app/auth/models/random-function';
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

  dislikes: number = 0;

  constructor(
    private dataService: HttpService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(switchMap((params) => {
      const date = params['id'];
      this.param = date;
      return this.dataService.getVideo(this.param);
    })).subscribe((video) => {
      this.item = video;
    });

    this.dislikes = getRandomNumber(100);
  }
}
