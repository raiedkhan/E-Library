import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logservice:LogService) { 

  }

  ngOnInit(): void {
    this.logservice.log("Nav Bar component Initialized",2);
  }

}
