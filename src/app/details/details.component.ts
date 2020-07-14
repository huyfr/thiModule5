import { Component, OnInit } from '@angular/core';
import {Book} from "../../book";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  currentBook: Book;

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.bookService.findById(id).subscribe(
      next => {
        this.currentBook = next;
      }, error => {
        console.log(error);
        this.currentBook = null;
      }
    )
  }

  backToIndex(): void {
    this.router.navigateByUrl('');
  }

}
