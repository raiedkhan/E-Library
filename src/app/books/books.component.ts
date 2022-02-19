import { Component, OnInit } from '@angular/core';
import books from '../../assets/Books.json';
interface Book {  
  title: string;  
  isbn?: string;
  thumbnailUrl: string;
  authors: string[];
}   
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  books_list:Book[]=books;
  constructor() { }

  ngOnInit(): void {
  }
  
}
