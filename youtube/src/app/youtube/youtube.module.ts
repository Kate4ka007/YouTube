import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent } from './youtube.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CoreModule } from '../core/core.module';
// import { BorderDirective } from '../directives/border.directive';
// import { SortPipe } from '../pipes/sort.pipe';
// import { CoreModule } from '../core/core.module';
// import { SearchItemComponent } from '../core/components/search-item/search-item.component';
// import { SortPipe } from '../pipes/sort.pipe';
// import { BorderDirective } from '../directives/border.directive';

const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent,
  },
];

@NgModule({
  declarations: [
    YoutubeComponent,
    MainPageComponent,
    SearchResultsComponent,
    // SearchItemComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
})
export class YoutubeModule { }
