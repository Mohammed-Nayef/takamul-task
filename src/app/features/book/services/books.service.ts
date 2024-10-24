import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBooksResponse } from '../types/GetBooksResponse';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(
    keywords: string = 'Lord of the rings',
    pageNumber: number = 1
  ): Observable<GetBooksResponse> {
    let url = '//openlibrary.org/search.json';

    const options = keywords.trim()
      ? { params: new HttpParams().set('q', keywords).set('page', pageNumber) }
      : { params: new HttpParams().set('page', pageNumber) };

    return this.http.get<GetBooksResponse>(url,options);
  }
}
