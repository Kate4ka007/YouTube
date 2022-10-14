import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';
import {
  AuthGuardService as AuthGuard,
} from './auth/services/auth-guard.service';

const routes: Routes = [
  { path: '', component: MainPageComponent, canActivate: [AuthGuard] },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'core', loadChildren: () => import('./core/core.module').then((m) => m.CoreModule) },
  { path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
