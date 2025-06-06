import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsResponse, Article, SourcesResponse, NewsApiParams } from '../models/article.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly API_KEY = environment.newsSources.theNewsApi.token;
  private readonly BASE_URL = environment.newsSources.theNewsApi.baseUrl;

  constructor(private http: HttpClient) { }

  private createParams(params: NewsApiParams): HttpParams {
    let httpParams = new HttpParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        httpParams = httpParams.set(key, value.toString());
      }
    });
    
    return httpParams.set('apiKey', this.API_KEY);
  }

  getTopHeadlines(params: NewsApiParams = {}): Observable<NewsResponse> {
    const httpParams = this.createParams(params);
    return this.http.get<NewsResponse>(`${this.BASE_URL}/top-headlines`, { params: httpParams });
  }

  searchEverything(params: NewsApiParams): Observable<NewsResponse> {
    const httpParams = this.createParams(params);
    return this.http.get<NewsResponse>(`${this.BASE_URL}/everything`, { params: httpParams });
  }

  getSources(params: { category?: string; language?: string; country?: string } = {}): Observable<SourcesResponse> {
    const httpParams = this.createParams(params);
    return this.http.get<SourcesResponse>(`${this.BASE_URL}/top-headlines/sources`, { params: httpParams });
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

  getLatestNews(): Observable<{ articles: Article[] }> {
    const params = new HttpParams()
      .set('api_token', this.API_KEY)
      .set('language', 'en')
      .set('limit', '10');

    return this.http.get<any>(`${this.BASE_URL}/news/top`, { params }).pipe(
      map(response => ({
        articles: response.data.map((item: any) => ({
          title: item.title,
          description: item.description,
          url: item.url,
          imageUrl: item.image_url,
          publishedAt: new Date(item.published_at),
          source: item.source,
          categories: item.categories || []
        }))
      }))
    );
  }

  searchNews(keyword: string): Observable<{ articles: Article[] }> {
    const params = new HttpParams()
      .set('api_token', this.API_KEY)
      .set('language', 'en')
      .set('search', keyword)
      .set('limit', '10');

    return this.http.get<any>(`${this.BASE_URL}/news/search`, { params }).pipe(
      map(response => ({
        articles: response.data.map((item: any) => ({
          title: item.title,
          description: item.description,
          url: item.url,
          imageUrl: item.image_url,
          publishedAt: new Date(item.published_at),
          source: item.source,
          categories: item.categories || []
        }))
      }))
    );
  }

  getArticleById(id: string): Observable<Article> {
    // Note: NewsAPI doesn't have a direct endpoint for single articles
    // This is a mock implementation that would need to be adjusted based on your needs
    return this.http.get<Article>(`${this.BASE_URL}/articles/${id}?apiKey=${this.API_KEY}`);
  }
}
