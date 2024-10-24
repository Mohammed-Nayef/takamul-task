import { Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { BooksListComponent } from "../../features/book/components/books-list/books-list.component";

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [NavComponent, BooksListComponent],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent {

}
