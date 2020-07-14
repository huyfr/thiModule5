import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DetailsComponent} from './details/details.component';
import {ListBooksComponent} from './list-books/list-books.component';
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "./book.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeleteBookComponent } from './delete-book/delete-book.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    EditBookComponent,
    DetailsComponent,
    ListBooksComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
