import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewForm:FormGroup;
  constructor() { 
    this.reviewForm=new FormGroup({
      name:new FormControl('',Validators.required),
      title:new FormControl,
      rating:new FormControl,
      comments:new FormControl
  })
  }

  ngOnInit(): void {
  }
  handlesubmit():void{
    alert(this.reviewForm.value.name);
  }

}
