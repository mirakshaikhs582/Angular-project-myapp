import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books/books.component';
import { CartComponent } from './cart/cart/cart.component';
import { BookComponent } from './book/book/book.component';
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent,CartComponent,BookComponent,BooksComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
