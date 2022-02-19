import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Bookslist from '../books.json';
import {Books} from '../browse-books.model';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.css']
})

export class BrowseBooksComponent implements OnInit {
  books:any=Bookslist;
  filteredBooks:Books[]=[];
  category=''
  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(para=>{
      this.category=para.category;
      this.filteredBooks=this.books.default.filter((book:Books)=>book.category===this.category)
    });    
  }
  ngOnChanges():void{

  }

}
