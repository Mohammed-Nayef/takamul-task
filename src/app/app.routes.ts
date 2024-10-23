import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StackoverflowPageComponent } from './pages/stackoverflow-page/stackoverflow-page.component';
import { QuestionDetailComponent } from './features/stackoverflow/components/question-detail/question-detail.component';

export const routes: Routes = [
  {path:'stackoverflow',component:StackoverflowPageComponent},
  {path:'question-details/:index',component:QuestionDetailComponent},

  {path:'home',component:HomePageComponent},
  {path:'',component:HomePageComponent},
  {path:'*',component:HomePageComponent}
];
