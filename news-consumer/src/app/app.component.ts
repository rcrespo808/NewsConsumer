import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <mat-toolbar color="primary" class="app-toolbar">
        <span class="toolbar-title">News Consumer</span>
        <span class="toolbar-spacer"></span>
        <button mat-icon-button aria-label="Refresh">
          <mat-icon>refresh</mat-icon>
        </button>
      </mat-toolbar>

      <div class="content-container">
        <app-news-search (search)="onSearch($event)"></app-news-search>
        <app-news-list></app-news-list>
      </div>

      <footer class="app-footer">
        <p>Powered by NewsAPI.org</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f5f5f5;
    }

    .app-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .toolbar-title {
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .toolbar-spacer {
      flex: 1 1 auto;
    }

    .content-container {
      margin-top: 64px;
      padding: 20px;
      flex: 1;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      box-sizing: border-box;
    }

    .app-footer {
      background-color: #f8f9fa;
      padding: 1rem;
      text-align: center;
      color: #6c757d;
      border-top: 1px solid #dee2e6;
    }

    @media (max-width: 600px) {
      .content-container {
        padding: 10px;
      }
    }
  `]
})
export class AppComponent {
  onSearch(keyword: string) {
    // The search functionality is handled by the NewsListComponent
    // This is just a pass-through event
  }
}
