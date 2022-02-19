import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { BooklogsService } from '../booklogs.service';
import {Books} from '../browse-books.model';
import { LogService } from '../log.service';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.css']
})
export class DisplaybookComponent implements OnInit {
  @Input() text:any;
  filteredBooks:Books[]=[];
  constructor(private logservice:LogService, private booklogs:BooklogsService) { 
  }

  ngOnInit(): void {
    this.filteredBooks=this.booklogs.books.default;
  }
  ngOnChanges(changes:SimpleChanges):void{

    this.filteredBooks = this.booklogs.books.default.filter((book:Books) =>book.title.toLowerCase().startsWith(this.text.toLowerCase()))
    if(this.text==''){
      this.logservice.log('Search text is empty',3);
    }
  }
}
