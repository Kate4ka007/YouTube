import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import AppComponent from './app.component';
import HeaderComponent from './header/header/header.component';
import SearchResultsComponent from './search/search-results/search-results.component';
import SearchItemComponent from './search/search-item/search-item.component';
import SearchInputComponent from './search/search-input/search-input.component';
import AuthComponent from './auth/auth.component';
import SearchSortingComponent from './search/search-sorting/search-sorting.component';
import SettingsButtonComponent from './header/settings-button/settings-button.component';
import NotFoundComponent from './shared/not-found/not-found.component';
import BorderDirective from './directives/border.directive';
import SortPipe from './pipes/sort.pipe';

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
    NotFoundComponent,
    BorderDirective,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
