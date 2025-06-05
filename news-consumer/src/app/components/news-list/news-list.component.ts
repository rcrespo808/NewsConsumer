import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articles: Article[] = [];
  loading = false;
  error: string | null = null;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.loading = true;
    this.error = null;

    this.newsService.getTopHeadlines().subscribe({
      next: (response) => {
        this.articles = response.articles;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load news articles. Please try again later.';
        this.loading = false;
        console.error('Error loading articles:', error);
      }
    });
  }
}
