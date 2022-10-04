import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube';

  showSorts = false;

  goApp(increased:any) {
    this.showSorts = increased;
    console.log('inApp', increased);
  }
}
