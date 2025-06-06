import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article.interface';
import { environment } from '../../environments/environment';
import { NewsSource } from './news-source.interface';

@Injectable({ providedIn: 'root' })
export class NewsApiOrgService implements NewsSource {
  id = 'newsapi-org';
  displayName = 'NewsAPI.org';
  private readonly API_KEY = environment.newsSources.newsApiOrg.token;
  private readonly BASE_URL = environment.newsSources.newsApiOrg.baseUrl;

  constructor(private http: HttpClient) {}

  getLatestNews(): Observable<Article[]> {
    const params = new HttpParams()
      .set('apiKey', this.API_KEY)
      .set('country', 'us')
      .set('pageSize', '10');

    return this.http
      .get<any>(`${this.BASE_URL}/top-headlines`, { params })
      .pipe(
        map(res =>
          res.articles.map((item: any) => ({
            title: item.title,
            description: item.description,
            url: item.url,
            imageUrl: item.urlToImage,
            publishedAt: new Date(item.publishedAt),
            source: item.source?.name || 'NewsAPI.org',
            categories: []
          }))
        )
      );
  }

  searchNews(keyword: string): Observable<Article[]> {
    const params = new HttpParams()
      .set('apiKey', this.API_KEY)
      .set('q', keyword)
      .set('pageSize', '10');

    return this.http
      .get<any>(`${this.BASE_URL}/everything`, { params })
      .pipe(
        map(res =>
          res.articles.map((item: any) => ({
            title: item.title,
            description: item.description,
            url: item.url,
            imageUrl: item.urlToImage,
            publishedAt: new Date(item.publishedAt),
            source: item.source?.name || 'NewsAPI.org',
            categories: []
          }))
        )
      );
  }
}
