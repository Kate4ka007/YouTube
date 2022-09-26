import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import HeaderComponent from './header/header/header.component';
import SearchResultsComponent from './search/search-results/search-results.component';
import SearchItemComponent from './search/search-item/search-item.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { AuthComponent } from './auth/auth.component';
import { SearchSortingComponent } from './search/search-sorting/search-sorting.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { LogoComponent } from './header/logo/logo.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchInputComponent,
    AuthComponent,
    SearchSortingComponent,
    SettingsButtonComponent,
    LogoComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
