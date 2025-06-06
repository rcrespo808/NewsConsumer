import { Component, OnInit } from '@angular/core';
import { NewsAggregatorService } from '../../services/news-aggregator.service';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-news-list',
  template: `
    <div class="feed-container">
      <div *ngIf="loading" class="loading-container">
        <span class="loading-text">Loading news articles...</span>
      </div>
      
      <div *ngIf="error" class="error-container">
        <span class="error-text">{{ error }}</span>
        <button class="retry-button" (click)="loadArticles()">Retry</button>
      </div>

      <div *ngIf="!loading && !error && articles.length === 0" class="no-sources-container">
        <span class="no-sources-text">No news sources are enabled. Please enable at least one source in Preferences.</span>
      </div>

      <app-article-list 
        *ngIf="!loading && !error && articles.length > 0"
        [articles]="articles" 
        (articleSelected)="onArticleClick($event)">
      </app-article-list>

      <div *ngIf="selectedArticle" class="article-detail-container">
        <app-article-detail [article]="selectedArticle"></app-article-detail>
      </div>
    </div>
  `,
  styles: [
    `.feed-container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem; }`,
    `.loading-container, .error-container { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; text-align: center; }`,
    `.loading-text { color: #666; font-size: 1.1rem; }`,
    `.error-text { color: #dc3545; margin-bottom: 1rem; }`,
    `.retry-button { padding: 0.5rem 1rem; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.2s; }`,
    `.retry-button:hover { background-color: #0056b3; }`,
    `.article-detail-container { background-color: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 1.5rem; margin-top: 2rem; }`,
    `.no-sources-container { display: flex; justify-content: center; align-items: center; padding: 2rem; text-align: center; }`,
    `.no-sources-text { color: #888; font-size: 1.1rem; }`
  ]
})
export class NewsListComponent implements OnInit {
  articles: Article[] = [];
  selectedArticle: Article | null = null;
  loading = false;
  error: string | null = null;

  constructor(private aggregator: NewsAggregatorService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.loading = true;
    this.error = null;

    this.aggregator.getLatestNews().subscribe({
      next: (articles) => {
        this.articles = articles;
        this.selectedArticle = null;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load news articles. Please try again.';
        this.loading = false;
        console.error('Error loading news:', err);
      }
    });
  }

  onArticleClick(article: Article) {
    this.selectedArticle = article;
    // Scroll to the article detail section
    const detailContainer = document.querySelector('.article-detail-container');
    if (detailContainer) {
      detailContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
