import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse, Article, SourcesResponse, NewsApiParams } from '../models/article.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = environment.newsApi.token;
  private baseUrl = environment.newsApi.baseUrl;

  constructor(private http: HttpClient) { }

  private createParams(params: NewsApiParams): HttpParams {
    let httpParams = new HttpParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        httpParams = httpParams.set(key, value.toString());
      }
    });
    
    return httpParams.set('apiKey', this.apiKey);
  }

  getTopHeadlines(params: NewsApiParams = {}): Observable<NewsResponse> {
    const httpParams = this.createParams(params);
    return this.http.get<NewsResponse>(`${this.baseUrl}/top-headlines`, { params: httpParams });
  }

  searchEverything(params: NewsApiParams): Observable<NewsResponse> {
    const httpParams = this.createParams(params);
    return this.http.get<NewsResponse>(`${this.baseUrl}/everything`, { params: httpParams });
  }

  getSources(params: { category?: string; language?: string; country?: string } = {}): Observable<SourcesResponse> {
    const httpParams = this.createParams(params);
    return this.http.get<SourcesResponse>(`${this.baseUrl}/top-headlines/sources`, { params: httpParams });
  }

  // Helper methods for common use cases
  getScienceHeadlines(): Observable<NewsResponse> {
    return this.getTopHeadlines({ country: 'us', category: 'science' });
  }

  getBusinessHeadlines(): Observable<NewsResponse> {
    return this.getTopHeadlines({ country: 'us', category: 'business' });
  }

  searchByKeyword(keyword: string): Observable<NewsResponse> {
    return this.searchEverything({ q: keyword });
  }

  getLatestNews(): Observable<NewsResponse> {
    return this.getTopHeadlines({ country: 'us', pageSize: 10 });
  }

  getArticleById(id: string): Observable<Article> {
    // Note: NewsAPI doesn't have a direct endpoint for single articles
    // This is a mock implementation that would need to be adjusted based on your needs
    return this.http.get<Article>(`${this.baseUrl}/articles/${id}?apiKey=${this.apiKey}`);
  }
}
