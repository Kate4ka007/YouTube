import { Component, OnInit } from '@angular/core';
import { HttpService } from './core/services/http.service';
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

  startShow = false;

  typeSort!: string;

  constructor(private httpService: HttpService, private openResults: ShowResultsService) {}

  ngOnInit(): void {
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
