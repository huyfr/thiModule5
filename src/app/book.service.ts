import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API_GENERATE = 'http://localhost:3000/books';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_GENERATE);
  }

  findById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.API_GENERATE}/${id}`);
  }

  save(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.API_GENERATE, book);
  }

  delete(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${this.API_GENERATE}/${id}`);
  }

  update(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.API_GENERATE}/${book.id}`, book);
  }
}
