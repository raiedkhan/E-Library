import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchtext=new FormControl;
  constructor(private searchservice:SearchService,private router:Router) { }

  ngOnInit(): void {
    this.searchtext.valueChanges.subscribe(text=>
      {
        this.router.navigate(['/reactive'],{skipLocationChange:true})
        this.searchservice.searchtext$.next(text)
      });
  }
  // passSearchItem(){
  //   this.searchservice.searchtext$.next(this.searchtext);
  // }

}
