import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { Book } from 'src/app/books/type/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  constructor(private booksService:BooksService){
  }
      ngOnInit(): void {
          this.books=this.booksService.getBooks();
      }
      myName:string='';
  
      books:Book[]=[ ]
  }
