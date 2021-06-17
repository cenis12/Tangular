import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userInput : string = "Hello";
  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('')
  });
  loginInput = new  FormControl("hello");

  //dateService: DateService;

  constructor(public dateService: DateService) {
    //this.dateService = dateService;
   }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.loginForm);
  }

}
