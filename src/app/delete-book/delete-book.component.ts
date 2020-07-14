import { Component, OnInit } from '@angular/core';
import {Book} from "../../book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {

  currentTodo: Book;
  submitted = false;

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.bookService.findById(id).subscribe(
      next => {
        this.currentTodo = next;
      }, error => {
        console.log(error);
        this.currentTodo = null;
      }
    )
  }

  onDelete(): void {
        let verify = confirm("Bạn có chắc chắn muốn xóa?");
        if (verify) {
          this.bookService.delete(this.currentTodo.id).subscribe( todo => {todo.id !== this.currentTodo.id});
          this.submitted = true;
          this.router.navigateByUrl('');
        } else {
          this.submitted = false;
        }
  }

  backToIndex(): void {
    this.submitted = false;
    this.router.navigateByUrl('');
  }
}
