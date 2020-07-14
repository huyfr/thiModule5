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
  length: number;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.findAll().subscribe(
      next => {
        this.bookList = next;
        console.log('Index '+JSON.stringify(next));
        this.length = this.bookList.length;
      }, error => {
        console.log(error);
      }, () => {
        console.log('completed');
      });
  }
}
