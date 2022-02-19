import { Injectable } from '@angular/core';
import * as Bookslist from './books.json';
import {Books} from './browse-books.model';

@Injectable({
  providedIn: 'root'
})
export class BooklogsService {
  books:any=Bookslist;
  constructor() { }
}
