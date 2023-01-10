import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/books/type/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
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
constructor(private router: Router,private authService:AuthService) {}
  ngOnInit(): void {
  }
  
 submit(){
 this.authService.login(this.form);
 }
 isLoading(){
  return this.authService.isLoading;
 }

}
