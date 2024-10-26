import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StackoverflowPageComponent } from './pages/stackoverflow-page/stackoverflow-page.component';
import { QuestionDetailComponent } from './features/stackoverflow/components/question-detail/question-detail.component';
import { BooksListComponent } from './features/book/components/books-list/books-list.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { LibraryApiPageComponent } from './pages/library-api-page/library-api-page.component';

export const routes: Routes = [
  {path:'books',component:BooksPageComponent},
  {path:'stackoverflow',component:StackoverflowPageComponent},
  {path:'question-details/:index',component:QuestionDetailComponent},
  {path:'libraryApi',component:LibraryApiPageComponent},

  {path:'home',component:HomePageComponent},
  {path:'',component:HomePageComponent},
  {path:'*',component:HomePageComponent}
];
