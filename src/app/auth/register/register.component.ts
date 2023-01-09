import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/books/type/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
  constructor() { }

  ngOnInit(): void {
  }
  register(){
    if(this.form.password != this.form.cpassword){
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
console.log('user logedin');

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}
