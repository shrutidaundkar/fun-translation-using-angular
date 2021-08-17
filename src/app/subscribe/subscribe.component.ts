import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number=1;

  feedbackForm : FormGroup = new FormGroup({
    uname :  new FormControl( '', [ Validators.required, Validators.pattern('[a-zA-Z]*')]),
    email: new FormControl('',[Validators.required,Validators.pattern('')]),
    suggest: new  FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{5,50}')]),
  })
  get aForm(){
    return this.feedbackForm.controls
  }
  constructor() { }

  ngOnInit(): void {}

  submitForm(){
    alert("Feedback submitted!")
    this.feedbackForm.reset();
  }
}
