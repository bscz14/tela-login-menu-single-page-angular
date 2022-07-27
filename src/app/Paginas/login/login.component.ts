import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 loginForm!: FormGroup;


  constructor() { }

  ngOnInit() {

this.loginForm =new FormGroup({

nome: new FormControl('')


});

  }

}
