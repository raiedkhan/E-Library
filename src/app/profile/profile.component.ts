import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  check_user=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle():void{
    this.check_user=!this.check_user;
  }

}
