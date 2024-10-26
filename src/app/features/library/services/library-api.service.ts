import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryCategory } from '../types/library-category';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { LibraryBook } from '../types/library-book';

@Injectable({
  providedIn: 'root'
})
export class LibraryApiService {

  http = inject(HttpClient)
  constructor() { }

  getLibararyCategories():Observable<LibraryCategory[]>{
    return this.http.get<LibraryCategory[]>("http://localhost:5083/api/categories")
  }
  getLibraryBooks():Observable<LibraryBook[]>{
    return this.http.get<LibraryBook[]>("http://localhost:5083/api/books")
  }
  getLibararyBooksByCategoryAndSubcategory(categoryId :number , subcategoryId?:number) : Observable<LibraryBook[]>{
    if(subcategoryId){
      return this.http.get<LibraryBook[]>(`http://localhost:5083/api/books/category/${categoryId}/subcategory/${subcategoryId}`)
    }
    return this.http.get<LibraryBook[]>(`http://localhost:5083/api/books/category/${categoryId}`)
  }
}
