import { Component, OnInit } from '@angular/core';
import { Book } from '../../books/type/Book';
import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
getCart(){
  return this.cartService.get();
}
}
