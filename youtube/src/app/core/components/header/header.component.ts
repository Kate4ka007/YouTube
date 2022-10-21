import { Component, EventEmitter, Output } from '@angular/core';
import { ShowResultsService } from 'src/app/core/services/show-results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showSetting = false;

  @Output() goApp = new EventEmitter<boolean>();

  constructor(private openResults: ShowResultsService) { }

  openSettings(showSetting:boolean): void {
    this.showSetting = showSetting;
    this.goApp.emit(showSetting);
  }

  isSearch(search: boolean): void {
    this.openResults.updateShowResults(search);
  }
}
