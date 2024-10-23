import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Question } from '../../types/question';
import { Questions } from '../../types/questions';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-questions-list',
  standalone: true,
  imports: [MatTableModule,CommonModule ,MatIcon,RouterModule],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent implements OnInit,OnDestroy {
  questionsSubscription!:Subscription;
  tableData!:Question[];
  questions$=this.questionsService.getQuestions()
  constructor(private questionsService:QuestionsService){
  }
  ngOnInit(): void {
    this.questionsSubscription = this.questions$.subscribe(res => this.tableData = res.items)
  }
  ngOnDestroy(): void {
   this.questionsSubscription.unsubscribe();
  }
  
}
 