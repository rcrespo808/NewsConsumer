import { Component } from '@angular/core';
import { Article } from './models/article.interface';
import { NewsService } from './services/news.service';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div class="butler-app-shell">
      <app-app-bar (search)="onSearch($event)"></app-app-bar>
      <div class="butler-main-layout">
        <app-sidebar-nav class="sidebar-nav"></app-sidebar-nav>
        <main class="main-content">
          <router-outlet></router-outlet>
        </main>
      </div>
      <app-bottom-nav class="bottom-nav"></app-bottom-nav>
    </div>
  `,
  styles: [`
    .butler-app-shell {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--butler-cream);
    }

    .butler-main-layout {
      display: flex;
      flex: 1;
      position: relative;
    }

    .sidebar-nav {
      width: 240px;
      background-color: var(--butler-cream);
      border-right: 1px solid var(--butler-gold);
      padding: 1rem;
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }

    .main-content {
      flex: 1;
      padding: 1rem;
      overflow-y: auto;
    }

    .bottom-nav {
      display: block;
      background-color: var(--butler-cream);
      border-top: 1px solid var(--butler-gold);
      padding: 0.5rem;

      @media (min-width: 768px) {
        display: none;
      }
    }
  `]
})
export class AppComponent {
  constructor(private newsService: NewsService) {}

  onSearch(keyword: string) {
    // TODO: Implement search functionality
  }
}
