import { Component } from '@angular/core';
import { LibraryBooksListComponent } from '../../features/library/components/library-books-list/library-books-list.component';
import { NavComponent } from '../../shared/components/nav/nav.component';

@Component({
  selector: 'app-library-api-page',
  standalone: true,
  imports: [LibraryBooksListComponent,NavComponent],
  templateUrl: './library-api-page.component.html',
  styleUrl: './library-api-page.component.css'
})
export class LibraryApiPageComponent {

}
