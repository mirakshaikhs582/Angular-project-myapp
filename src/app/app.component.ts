import { Component, OnInit } from "@angular/core";
import { BooksService } from "./books.service";
import { Book } from "./books/type/Book";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebase.config";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private booksService:BooksService,private authService:AuthService){}
      ngOnInit(): void {
          initializeApp(firebaseConfig);
          this.books=this.booksService.getBooks();
      }
      hide:boolean=false
      myName:string='';

      books:Book[]=[ ]
      isAuthenticated(){
        return this.authService.isAuthenticated;
      }
      logout(){
        this.authService.logout();
        // this.hide;

      }
  }