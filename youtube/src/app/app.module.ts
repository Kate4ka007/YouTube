import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import environment from 'src/environments/environment';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { CustomRouteReuseStrategy } from './strategies/custom-route-reuse-strategy';
import { YoutubeInterceptor } from './youtube/interceptor/youtube.interceptor';
import { SearchEffects } from './store/effects/card.effects';
import { customCardKey, customCardReducer } from './store/reducers/card.reducer';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthModule,
    StoreModule.forRoot({
      [customCardKey]: customCardReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([SearchEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YoutubeInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule { }
