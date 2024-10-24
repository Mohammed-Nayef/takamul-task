import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  NgZone,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BooksService } from '../../services/books.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Book } from '../../types/Book';
import { CommonModule } from '@angular/common';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  tap,
  throttle,
  throttleTime,
} from 'rxjs';
import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';

type SearchForm = FormGroup<{
  keyword: FormControl<string>;
}>;

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [
    CdkDropList,
    ScrollingModule,
    CommonModule,
    CdkDrag,
    MatIcon,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css',
})
export class BooksListComponent implements OnInit, AfterViewInit {
  selectedBgColor: string =
    'linear-gradient(to right top, #6bd1b6, #4fb7b2, #439da8, #438396, #45697f, #3f6075, #3a586c, #344f62, #275465, #165865, #025c61, #00605a)';

  fetchedBooksList: Book[] = []; // on init fetch without keyword & on search filter

  dropListData: Book[] = [];

  currentPage: number = 0;

  searchFg!: SearchForm;
  @ViewChild(CdkVirtualScrollViewport)
  infiniteScoller!: CdkVirtualScrollViewport;

  constructor(
    private booksService: BooksService,
    private fb: NonNullableFormBuilder,
    private ngZone: NgZone
  ) { }

  ngAfterViewInit(): void {
    this.infiniteScoller
      .elementScrolled()
      .pipe(
        map(() => this.infiniteScoller.measureScrollOffset('bottom')),
        // collects last 2 emmitions in array and emits thim togother
        pairwise(),
        // filter out upowards scrolling and check the latest scroll value to be 140 from the bottom (reaching end of the list)
        filter(([y1, y2]) => y2 < y1 && y2 < 140),
        tap(([y1,y2]) => console.log('y1',y1,'y2',y2)),
        // ignore multi emmittions until timer resets
        throttleTime(5000)
      )
      .subscribe(() => {
        // since virtual scroller works outside the ngZones(no changeDetiction)
        // => must use ngZone service to change binded data and dispatch change detection
        this.ngZone.run(() => {
          this.loadMoreItems();

        });
      });
  }

  ngOnInit(): void {
    // fetch and assign the fetched and filltered lists
    this.booksService.getBooks().subscribe((res) => {
      this.fetchedBooksList = res.docs;
    });

    this.searchFg = this.fb.group({
      keyword: this.fb.control(''),
    });
    this.searchFg.controls.keyword.valueChanges
      .pipe(
        debounceTime(750),
        // don't emmit until the vlaue is changed
        distinctUntilChanged()
      )
      .subscribe((keyword) => this.onSearchChange(keyword));
  }

  addToDropList(index: number) {
    this.dropListData.push(this.fetchedBooksList[index]);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.dropListData, event.previousIndex, event.currentIndex);
  }

  handelDragListDelete(index: number) {
    this.dropListData.splice(index, 1);
  }

  onSearchChange(keyword: string) {
    this.currentPage = 1;
    this.booksService
      .getBooks(keyword)
      .subscribe((res) => (this.fetchedBooksList = res.docs));
  }

  loadMoreItems() {
    this.currentPage += 1;
    this.booksService
      .getBooks(this.searchFg.controls.keyword.value, this.currentPage)
      .subscribe((res) => {
        this.fetchedBooksList = res.docs;
      });
  }

  changeBg(value: string) {
    this.selectedBgColor = value;
  }
}
