import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeComponent } from './youtube.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CoreModule } from '../core/core.module';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { AuthModule } from '../auth/auth.module';
import { YoutubeInterceptor } from './interceptor/youtube.interceptor';
import { CustomCardComponent } from './components/custom-card/custom-card.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent,
  },
  { path: 'result', component: InfoPageComponent },
];

@NgModule({
  declarations: [
    YoutubeComponent,
    MainPageComponent,
    SearchResultsComponent,
    InfoPageComponent,
    CustomCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: YoutubeInterceptor,
    multi: true,
  },
  ],
})
export class YoutubeModule { }
