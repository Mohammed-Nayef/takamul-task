import { Component } from '@angular/core';
import { NavComponent } from '../../../../shared/components/nav/nav.component';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Question } from '../../types/question';
import { QuestionsService } from '../../services/questions.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-question-detail',
  standalone: true,
  imports: [NavComponent,CommonModule,MatChipsModule,MatIcon],
  templateUrl: './question-detail.component.html',
  styleUrl: './question-detail.component.css'
})
export class QuestionDetailComponent {
  questionIndex:number=0;
  question!:Question;
  subs!:Subscription;
  tags:string[] = ['nodejs','ts','express','backend','api']
  constructor(private activatedRoute :ActivatedRoute , private questionsService:QuestionsService){
    this.questionIndex = Number(this.activatedRoute.snapshot.paramMap.get('index'))
    this.subs = this.questionsService.getQuestions().subscribe(
      res => this.question = res.items[this.questionIndex]
    )
  }


}
