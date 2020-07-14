import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../book";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  editForm: FormGroup;
  currentBook: Book;
  submitted = false;

  constructor(private bookService: BookService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['']
    });
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.bookService.findById(id).subscribe(
      next => {
        this.currentBook = next;
        this.editForm.patchValue(this.currentBook);
      }, error => {
        console.log(error);
        this.currentBook = null;
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.editForm.valid) {
      const {value} = this.editForm;
      const data = {
        ...this.currentBook,
        ...value
      };
      this.bookService.update(data).subscribe(
        next => {
          this.router.navigateByUrl('');
        }, error => {
          console.log(error);
        }
      );
    }
  }

  get rfc() {
    return this.editForm.controls;
  }

  backToIndex(): void {
    this.submitted = false;
    this.editForm.reset();
    this.router.navigateByUrl('');

  }

}
