import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { HeaderComponent } from './core/components/header/header.component';
// import { SearchResultsComponent } from './search/search-results/search-results.component';
// import { SearchItemComponent } from './search/search-item/search-item.component';
// import { SearchInputComponent } from './core/components/search-input/search-input.component';
// import { UserComponent } from './core/components/user/user.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
// import { BorderDirective } from './directives/border.directive';
// import { SortPipe } from './pipes/sort.pipe';
import { AppRoutingModule } from './app-routing.module';

// import { HeaderComponent } from './core/components/header/header.component';
// import { HeaderComponent } from './core/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    /* HeaderComponent, */
    /* SearchResultsComponent, */
    /* SearchItemComponent, */
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,

    // HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
