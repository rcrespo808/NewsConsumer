import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-news-list',
  template: `
    <div class="news-container" *ngIf="!loading; else loadingTemplate">
      <app-butler-news-card *ngFor="let article of articles" [article]="article"></app-butler-news-card>
      <div *ngIf="articles.length === 0" class="no-articles">
        <span class="butler-placeholder">No articles found. Try a different search term.</span>
      </div>
    </div>
    <ng-template #loadingTemplate>
      <div class="loading-container">
        <span class="butler-placeholder">Loading news articles...</span>
      </div>
    </ng-template>
  `,
  styles: [`
    .news-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 20px;
    }
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      gap: 20px;
    }
    .no-articles {
      text-align: center;
      padding: 40px;
      color: #665C4E;
    }
    @media (max-width: 600px) {
      .news-container {
        padding: 10px;
      }
    }
  `]
})
export class NewsListComponent implements OnInit {
  articles: Article[] = [];
  loading = true;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadLatestNews();
  }

  loadLatestNews() {
    this.loading = true;
    this.newsService.getLatestNews().subscribe(
      response => {
        this.articles = response.articles;
        this.loading = false;
      },
      error => {
        console.error('Error loading news:', error);
        this.loading = false;
      }
    );
  }

  searchNews(keyword: string) {
    this.loading = true;
    this.newsService.searchByKeyword(keyword).subscribe(
      response => {
        this.articles = response.articles;
        this.loading = false;
      },
      error => {
        console.error('Error searching news:', error);
        this.loading = false;
      }
    );
  }
}
