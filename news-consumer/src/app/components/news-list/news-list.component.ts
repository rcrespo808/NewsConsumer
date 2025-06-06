import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article.interface';
import { ArticleStateService } from '../../services/article-state.service';

@Component({
  selector: 'app-news-list',
  template: `
    <div class="news-container">
      <mat-card *ngFor="let article of articles; let i = index" class="news-card">
        <mat-card-header>
          <mat-card-title>{{ article.title }}</mat-card-title>
          <mat-card-subtitle>
            {{ article.source.name }} - {{ article.publishedAt | date }}
          </mat-card-subtitle>
        </mat-card-header>
        
        <img *ngIf="article.urlToImage" 
             mat-card-image 
             [src]="article.urlToImage" 
             [alt]="article.title">
        
        <mat-card-content>
          <p>{{ article.description }}</p>
        </mat-card-content>
        
        <mat-card-actions>
          <button mat-button
                  color="primary"
                  (click)="openArticle(article, i)">
            READ MORE
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .news-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    
    .news-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .news-card mat-card-content {
      flex-grow: 1;
    }
    
    .news-card img {
      object-fit: cover;
      height: 200px;
    }
  `]
})
export class NewsListComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private newsService: NewsService,
    private articleState: ArticleStateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadLatestNews();
  }

  loadLatestNews() {
    this.newsService.getLatestNews().subscribe(
      response => {
        this.articles = response.articles;
      },
      error => {
        console.error('Error loading news:', error);
      }
    );
  }

  searchNews(keyword: string) {
    this.newsService.searchByKeyword(keyword).subscribe(
      response => {
        this.articles = response.articles;
      },
      error => {
        console.error('Error searching news:', error);
      }
    );
  }

  openArticle(article: Article, index: number) {
    this.articleState.setArticle(article);
    this.router.navigate(['/article', index]);
  }
}
