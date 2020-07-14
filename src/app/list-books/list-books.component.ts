import { Component, OnInit } from '@angular/core';
import {Book} from "../../book";
import {BookService} from "../book.service";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  bookList: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.findAll().subscribe(
      next => {
        this.bookList = next;
        console.log('Index '+JSON.stringify(next));
      }, error => {
        console.log(error);
      }, () => {
        console.log('completed');
      });
  }
}
