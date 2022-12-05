import { Component, Input, OnInit } from '@angular/core';
import getRandomNumber from 'src/app/auth/models/random-function';
import { Item } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() data!: Item;

  dislikes: number = 0;

  ngOnInit() {
    this.dislikes = getRandomNumber(100);
  }
}
