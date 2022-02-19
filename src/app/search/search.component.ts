import { Component, OnInit } from '@angular/core';
import { BooklogsService } from '../booklogs.service';
import {Books} from '../browse-books.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private booklogs:BooklogsService) { }
  books:Books[]=this.booklogs.books;
  title='';
  ngOnInit(): void {
    this.books=this.booklogs.books.default;
  }
  search():void{
    this.books=this.books.filter((book:Books)=>book.title===this.title);
  }
}
