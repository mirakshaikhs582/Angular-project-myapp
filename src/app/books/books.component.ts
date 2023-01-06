import { Component, Input, OnInit } from '@angular/core';
import { Book } from './type/Book';
import { Output, EventEmitter  } from '@angular/core'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
@Input() book:Book={} as Book;
@Output() bookEmitter =new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }
  addToCard(){
this.bookEmitter.emit(this.book);
    
  }
}
