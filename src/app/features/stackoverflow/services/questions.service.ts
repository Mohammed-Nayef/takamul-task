import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Questions } from '../types/questions';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }
  getQuestions():Observable<Questions>{
    return this.http.get<Questions>("//api.stackexchange.com/2.3/questions?page=1&pagesize=50&order=desc&sort=activity&site=stackoverflow")
  }
}
