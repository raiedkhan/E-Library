import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flag=true;
  resourceSelected='';
  cities=['Project Gutenberg','Open Library','Google eBookstore','Amazon Free Kindle Books','Wynk E-Library','Internet Archive']
  fontColor='red';
  fontweight='bold';
  constructor() { }
  books={
    name:'Adnroid',
    Price:'250',
    Author:'RR'
  }
  today=new Date();
  ngOnInit(): void {
  }

}
