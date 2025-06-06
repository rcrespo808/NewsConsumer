import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-news-search',
  template: `
    <mat-form-field class="search-field">
      <mat-label>Search News</mat-label>
      <input matInput
             [formControl]="searchControl"
             placeholder="Enter keywords...">
      <mat-icon matSuffix>search</mat-icon>
    </mat-form-field>
  `,
  styles: [`
    .search-field {
      width: 100%;
      max-width: 500px;
      margin: 20px auto;
      display: block;
    }
  `]
})
export class NewsSearchComponent {
  @Output() search = new EventEmitter<string>();
  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        if (value) {
          this.search.emit(value);
        }
      });
  }
} 
