import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent } from './youtube.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchResultsComponent } from '../search/search-results/search-results.component';
import { SearchItemComponent } from '../search/search-item/search-item.component';
import { SortPipe } from '../pipes/sort.pipe';
import { BorderDirective } from '../directives/border.directive';

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
    SearchItemComponent,
    SortPipe,
    BorderDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class YoutubeModule { }
