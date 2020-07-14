import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  createForm: FormGroup;
  submitted = false;

  constructor(private bookService: BookService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      const value = this.createForm.getRawValue();
      console.log(value);
      this.bookService.save(value).subscribe(error => {
        console.log(error)
      });
      this.submitted = true;
      this.router.navigateByUrl('');
    }
  }

  backToIndex(): void {
    this.submitted = false
    this.createForm.reset();
    this.router.navigateByUrl('');
  }

  get rfc() {
    return this.createForm.controls;
  }

}
