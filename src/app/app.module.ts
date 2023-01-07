import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { BookComponent } from './book/book/book.component';
@NgModule({
        declarations:[AppComponent, BooksComponent, CartComponent, BookComponent],
        imports:[BrowserModule,FormsModule,AppRoutingModule],
        bootstrap:[AppComponent]


}
)
export class AppModule{} 