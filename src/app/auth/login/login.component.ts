import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/books/type/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:LoginForm={
  email:'',
  password:'',
  cpassword:''
}
  constructor() { }
  ngOnInit(): void {
  }
  submit(){
    alert('hey you logedin')
  }

}
