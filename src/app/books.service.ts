import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBooks(){
    return[
      {
          name:'Html With Javascript',
          author:'Satish Hunner',
          image:'https://m.media-amazon.com/images/I/41H8MwqXnuS._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg',
          amount:900,
      },
      {
          name:'Web Publishing',
          author:'Laura Lemay',
          image:'https://m.media-amazon.com/images/I/51rJ6SnL7SL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg',
          amount:3000,
      }
      ,
      {
          name:'Web Publishing',
          author:'Laura Lemay',
          image:'https://m.media-amazon.com/images/I/51w30bej9WL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg',
          amount:5000,
      },
      {
          name:'Web Publishing',
          author:'Laura Lemay',
          image:'https://images-eu.ssl-images-amazon.com/images/I/81k0MCPzmhL._AC_UL116_SR116,116_.jpg',
          amount:2000,
      },


  ]
  }
}
