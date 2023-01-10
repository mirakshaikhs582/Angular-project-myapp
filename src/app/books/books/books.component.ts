import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../type/Book';
import { CartService } from '../../cart/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() book:Book={} as Book;
    constructor(private cartService:CartService,private router:Router) { }
    isInCart:boolean=false;
    ngOnInit(): void {
    }
    addToCart(){
      this.isInCart=true;
      this.cartService.add(this.book)
    }
    removeFromCart(){
      this.isInCart=false;
      this.cartService.remove(this.book)
    }
  }
  