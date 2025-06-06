import { Component } from '@angular/core';
import { Article } from './models/article.interface';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="butler-app-shell">
      <app-app-bar (search)="onSearch($event)"></app-app-bar>
      <div class="butler-main-layout">
        <app-sidebar-nav class="sidebar-nav" (navigate)="onNavigate($event)"></app-sidebar-nav>
        <main class="main-content">
          <app-article-list [articles]="articles" (click)="onArticleClick($event)"></app-article-list>
          <ng-container *ngIf="isMobile; else desktopDetail">
            <app-article-detail [article]="selectedArticle"></app-article-detail>
          </ng-container>
        </main>
        <ng-template #desktopDetail>
          <aside class="article-detail-placeholder">
            <app-article-detail [article]="selectedArticle"></app-article-detail>
          </aside>
        </ng-template>
      </div>
      <app-bottom-nav class="bottom-nav" (navigate)="onNavigate($event)"></app-bottom-nav>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Article[] = [];
  selectedArticle: Article | null = null;
  isMobile = false;

  constructor(private newsService: NewsService) {
    this.loadArticles();
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  loadArticles() {
    this.newsService.getLatestNews().subscribe(
      response => {
        this.articles = response.articles;
        this.selectedArticle = null;
      },
      error => {
        this.articles = [];
        this.selectedArticle = null;
      }
    );
  }

  onSearch(keyword: string) {
    if (!keyword) {
      this.loadArticles();
      return;
    }
    this.newsService.searchByKeyword(keyword).subscribe(
      response => {
        this.articles = response.articles;
        this.selectedArticle = null;
      },
      error => {
        this.articles = [];
        this.selectedArticle = null;
      }
    );
  }

  onNavigate(section: string) {
    // Navigation logic placeholder
    // Could be expanded to handle routing or section switching
  }

  onArticleClick(article: Article) {
    this.selectedArticle = article;
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 900;
  }
}
