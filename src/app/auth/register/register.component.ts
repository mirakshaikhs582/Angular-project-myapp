import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/books/type/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:LoginForm={
    email:'',
    password:'',
    cpassword:''
 }

 passwordMatched:boolean=true;
 constructor(private router: Router,private authService:AuthService) {}

  ngOnInit(): void {
  }
  register(){
    this.authService.register(this.form);
  }
  isLoading(){
    return this.authService.isLoading;
   }
  
}
