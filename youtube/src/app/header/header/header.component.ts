import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  showSetting = false;

  @Output() goApp = new EventEmitter<boolean>();

  @Output() showResults = new EventEmitter<boolean>();

  changed(increased:boolean): void {
    this.showSetting = increased;
    this.goApp.emit(increased);
  }

  isSearch(search: boolean): void {
    this.showResults.emit(search);
  }
}
