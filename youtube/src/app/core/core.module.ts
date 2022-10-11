import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchSortingComponent } from './components/search-sorting/search-sorting.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { UserComponent } from './components/user/user.component';
import { BorderDirective } from './directives/border.directive';
import { SortPipe } from './pipes/sort.pipe';

const routes: Routes = [
  { path: '', component: CoreComponent },
];

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    SearchInputComponent,
    SearchItemComponent,
    SearchSortingComponent,
    SettingsButtonComponent,
    UserComponent,
    SortPipe,
    BorderDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,

  ],
  exports: [
    HeaderComponent,
    SearchInputComponent,
    SearchItemComponent,
    SearchSortingComponent,
    SettingsButtonComponent,
    UserComponent,
    SortPipe,
    BorderDirective,
  ],
})
export class CoreModule { }
