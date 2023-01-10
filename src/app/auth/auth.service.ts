import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm } from '../books/type/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  passwordMatched:boolean=true;
  isLoading:boolean=false;
  constructor(private router: Router) {}
  isAuthenticated:boolean=false;
  login(form:LoginForm){
    if(this.isLoading)return;
    this.isLoading=true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated=true
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated=false;
      }).finally(()=>(this.isLoading=false));
  }
  register(form:LoginForm){
    if(this.isLoading)return;
    if(form.password != form.cpassword){
      this.passwordMatched = false;
      return;
    }
    this.isLoading=true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email,form.password)
      .then((userCredential) => {
        this.isAuthenticated=true;
        this.router.navigate(['/login']);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated=false;
        // ..
      }).finally(()=>(this.isLoading=false));
  }
  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
    this.router.navigate(['/login']);
    this.isAuthenticated=false;
    }).catch((error) => {
      // An error happened.
    });
      }
}
