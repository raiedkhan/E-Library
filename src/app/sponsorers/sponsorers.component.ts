import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-sponsorers',
  templateUrl: './sponsorers.component.html',
  styleUrls: ['./sponsorers.component.css']
})
export class SponsorersComponent implements OnInit {

  users:any=[];
  constructor(private httpservice:HttpserviceService,private logservice:LogService) { }
  ngOnInit(): void {
    this.httpservice.getUser().subscribe(
      (response:any)=>this.users=response.data,
      error=>this.logservice.log("Error",3),
      ()=>this.logservice.log("Completed",1)
      )
  }
}
