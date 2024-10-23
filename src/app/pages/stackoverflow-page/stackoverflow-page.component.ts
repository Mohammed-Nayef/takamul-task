import { Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { QuestionsListComponent } from '../../features/stackoverflow/components/questions-list/questions-list.component';

@Component({
  selector: 'app-stackoverflow-page',
  standalone: true,
  imports: [NavComponent,QuestionsListComponent],
  templateUrl: './stackoverflow-page.component.html',
  styleUrl: './stackoverflow-page.component.css'
})
export class StackoverflowPageComponent {

}
