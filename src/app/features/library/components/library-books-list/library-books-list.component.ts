import { Component } from '@angular/core';
import { LibraryApiService } from '../../services/library-api.service';
import { Observable } from 'rxjs';
import { LibraryCategory } from '../../types/library-category';
import { LibraryBook } from '../../types/library-book';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-library-books-list',
  standalone: true,
  imports: [CommonModule,MatMenuModule,MatButtonModule,MatIconModule],
  templateUrl: './library-books-list.component.html',
  styleUrl: './library-books-list.component.css'
})
export class LibraryBooksListComponent {

  categories!:LibraryCategory[];
  books!:LibraryBook[];
  filteredBooks:LibraryBook[]=[];
  filteredBy:string='';

  constructor(private libraryApiService : LibraryApiService){
    libraryApiService.getLibraryBooks().subscribe(res => {
      this.books = res
      this.filteredBooks=res;
    })
    libraryApiService.getLibararyCategories().subscribe(res => this.categories = res)
    // libraryApiService.getLibararyBooksByCategoryAndSubcategory(1).subscribe(res => console.log(res))
    // libraryApiService.getLibararyBooksByCategoryAndSubcategory(1,2).subscribe(res => console.log(res))
  }

  filterBySubcategory(subcategoryId:number,categoryName:string,subcategoryName:string){
    this.filteredBooks= this.books.filter(book => book.subcategoryId == subcategoryId);
    this.filteredBy = categoryName+" : "+subcategoryName
  }
  clearFilter(){
    this.filteredBooks = this.books
    this.filteredBy=''; 
  }
}
