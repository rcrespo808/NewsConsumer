import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse, Article } from '../models/article.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'YOUR_API_KEY'; // Replace with your NewsAPI key
  private baseUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(`${this.baseUrl}/top-headlines?country=us&apiKey=${this.apiKey}`);
  }

  searchNews(query: string): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(`${this.baseUrl}/everything?q=${query}&apiKey=${this.apiKey}`);
  }

  getArticleById(id: string): Observable<Article> {
    // Note: NewsAPI doesn't have a direct endpoint for single articles
    // This is a mock implementation that would need to be adjusted based on your needs
    return this.http.get<Article>(`${this.baseUrl}/articles/${id}?apiKey=${this.apiKey}`);
  }
}
