import { Component, Output, EventEmitter } from '@angular/core';
import { ButlerIcons } from 'src/assets/butler-icons';

@Component({
  selector: 'app-app-bar',
  template: `
    <div class="app-bar">
      <div class="app-bar-left">
        <img [src]="butlerIcon" alt="Butler Portrait" class="butler-avatar" />
        <h1>Butler Brief</h1>
      </div>
      <div class="app-bar-right">
        <form class="search-bar" (ngSubmit)="onSearch()">
          <input 
            type="text" 
            placeholder="Search news..." 
            [(ngModel)]="searchTerm"
            name="search"
          />
          <button type="submit" class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .app-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: var(--butler-cream);
      border-bottom: 2px solid var(--butler-gold);
    }

    .app-bar-left {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .butler-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 2px solid var(--butler-gold);
    }

    h1 {
      margin: 0;
      font-family: 'Playfair Display', serif;
      color: var(--butler-brown);
    }

    .app-bar-right {
      flex: 1;
      max-width: 600px;
      margin-left: 2rem;
    }

    .search-bar {
      display: flex;
      gap: 0.5rem;
      background-color: white;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid var(--butler-gold);
    }

    input {
      flex: 1;
      border: none;
      outline: none;
      font-family: 'Lora', serif;
      font-size: 1rem;
      color: var(--butler-brown);
    }

    .search-button {
      background: none;
      border: none;
      color: var(--butler-gold);
      cursor: pointer;
      padding: 0.5rem;
      transition: color 0.2s ease;

      &:hover {
        color: var(--butler-brown);
      }
    }
  `]
})
export class AppBarComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm = '';
  butlerIcon = ButlerIcons['6464.png'];

  onSearch() {
    if (this.searchTerm.trim()) {
      this.search.emit(this.searchTerm.trim());
    }
  }
} 