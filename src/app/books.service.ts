import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  constructor() { }
  getBooks(){
    return[
      {
          name:'Think and Grow Rich',
          author:'Hill Napoleon',
          image:'https://rukminim1.flixcart.com/image/612/612/ku5ufm80/book/w/j/b/the-art-of-war-original-imag7c82hma27scy.jpeg?q=70',
          amount:900,
      },
      {
          name:'Think and Grow Rich',
          author:'Hill Napoleon',
          image:'https://rukminim1.flixcart.com/image/612/612/kqy3rm80/book/t/e/r/rich-dad-s-the-business-school-original-imag4uf58kezbxxm.jpeg?q=70',
          amount:3000,
      }
      ,
      {
          name:'Think and Grow Rich',
          author:'Hill Napoleon',
          image:'https://rukminim1.flixcart.com/image/612/612/l3929ow0/book/c/7/d/eat-that-frog-original-imageenjt4zbepux.jpeg?q=70',
          amount:5000,
      },
      {
        name:'Think and Grow Rich',
        author:'Hill Napoleon',
        image:'https://rukminim1.flixcart.com/image/612/612/xif0q/book/e/l/e/the-high-performance-entrepreneur-original-imaghhzqmhag7hhf.jpeg?q=70',
        amount:5000,
    },


  ]
  }
}
