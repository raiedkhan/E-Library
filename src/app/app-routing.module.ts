import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooksComponent } from './books/books.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { BrowseComponent } from './browse/browse.component';
import { ContactComponent } from './contact/contact.component';
import { ElibraryComponent } from './elibrary/elibrary.component';
import { HomeComponent } from './home/home.component';
import { PublicLibraryHomeComponent } from './public-library-home/public-library-home.component';
import { PublicLibraryServicesComponent } from './public-library-services/public-library-services.component';
import { PublicLibraryComponent } from './public-library/public-library.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReviewComponent } from './review/review.component';
import { SearchComponent } from './search/search.component';
import { SponsorersComponent } from './sponsorers/sponsorers.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'books',component:BooksComponent},
  {path:'public-library',component:PublicLibraryComponent,
  children:[
    {path:'home',component:PublicLibraryHomeComponent},
    {path:'services',component:PublicLibraryServicesComponent},
    {path:'elibrary',component:ElibraryComponent},
  ]  
},
  {path:'booksearch',component:BooksearchComponent},
  {path:'contact',component:ContactComponent},
  {path:'sponsorers',component:SponsorersComponent},
  {path:'review',component:ReviewComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'browse',component:BrowseComponent,
  children:[
    {path:'books/:category',component:BrowseBooksComponent},
  ]
  },
  {path:'search',component:SearchComponent},
  { path: 'rent', loadChildren: () => import('./rent/rent.module').then(m => m.RentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
