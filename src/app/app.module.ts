import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { MyHighlighterDirective } from './my-highlighter.directive';
import { FormatPipe } from './format.pipe';
import { PublicLibraryComponent } from './public-library/public-library.component';
import { PublicLibraryHomeComponent } from './public-library-home/public-library-home.component';
import { PublicLibraryServicesComponent } from './public-library-services/public-library-services.component';
import { ElibraryComponent } from './elibrary/elibrary.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { SearchComponent } from './search/search.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { DisplaybookComponent } from './displaybook/displaybook.component';
import {HttpClientModule} from '@angular/common/http';
import { SponsorersComponent } from './sponsorers/sponsorers.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component';
import { ReactiveComponent } from './reactive/reactive.component'
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    BooksComponent,
    MyHighlighterDirective,
    FormatPipe,
    PublicLibraryComponent,
    PublicLibraryHomeComponent,
    PublicLibraryServicesComponent,
    ElibraryComponent,
    BrowseComponent,
    BrowseBooksComponent,
    SearchComponent,
    BooksearchComponent,
    DisplaybookComponent,
    SponsorersComponent,
    ContactComponent,
    ReviewComponent,
    ReactiveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
