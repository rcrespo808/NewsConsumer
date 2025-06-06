import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  template: `
    <header class="butler-app-bar">
      <div class="app-bar-left">
        <img src="assets/butler-portrait.png" alt="Butler Portrait" class="butler-avatar" />
        <span class="app-title">The Butler Brief</span>
      </div>
      <form class="app-bar-search" (submit)="onSearch($event)">
        <input
          type="text"
          class="butler-search-input"
          placeholder="Search articles..."
          [(ngModel)]="searchTerm"
          name="search"
          (focus)="searchFocused = true"
          (blur)="searchFocused = false"
        />
        <button type="submit" class="butler-search-btn" aria-label="Search">
          <span class="material-icons">search</span>
        </button>
      </form>
    </header>
  `,
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm = '';
  searchFocused = false;

  onSearch(event: Event) {
    event.preventDefault();
    this.search.emit(this.searchTerm.trim());
  }
} 