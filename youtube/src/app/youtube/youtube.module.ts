import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent } from './youtube.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent,
  },
];

@NgModule({
  declarations: [
    YoutubeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class YoutubeModule { }
