import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from "./details/details.component";
import {ListBooksComponent} from "./list-books/list-books.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";


const routes: Routes = [
  {path: '', component: ListBooksComponent},
  {path: 'book/create', component: CreateBookComponent},
  {path: 'book/:id', component: DetailsComponent},
  {path: 'book/:id/edit', component: EditBookComponent},
  {path: 'book/:id/delete', component: DeleteBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
