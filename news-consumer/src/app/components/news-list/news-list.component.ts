import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-news-list',
  template: `
    <div class="feed-container">
      <app-article-list [articles]="articles" (articleSelected)="onArticleClick($event)"></app-article-list>
      <div *ngIf="selectedArticle" class="article-detail-container">
        <app-article-detail [article]="selectedArticle"></app-article-detail>
      </div>
    </div>
  `,
  styles: [`
    .feed-container {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .article-detail-container {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
      margin-top: 2rem;
    }
  `]
})
export class NewsListComponent implements OnInit {
  articles: Article[] = [];
  selectedArticle: Article | null = null;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadArticles();
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

  onArticleClick(article: Article) {
    this.selectedArticle = article;
    // Scroll to the article detail section
    const detailContainer = document.querySelector('.article-detail-container');
    if (detailContainer) {
      detailContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
