import { Component, OnInit } from "@angular/core";
import { BooksService } from "./books.service";
import { Book } from "./books/type/Book";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebase.config";

@Component({
    selector:'app-root',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(private booksService:BooksService){
}
    ngOnInit(): void {
        initializeApp(firebaseConfig);
        this.books=this.booksService.getBooks();
    }
    myName:string='';

    books:Book[]=[ ]
}