import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article.interface';
import { environment } from '../../environments/environment';
import { NewsSource } from './news-source.interface';

@Injectable({
  providedIn: 'root'
})
export class TheNewsApiService implements NewsSource {
  id = 'the-news-api';
  displayName = 'The News API';
  private readonly API_KEY = environment.newsSources.theNewsApi.token;
  private readonly BASE_URL = environment.newsSources.theNewsApi.baseUrl;

  constructor(private http: HttpClient) {}

  getLatestNews(): Observable<Article[]> {
    const params = new HttpParams()
      .set('api_token', this.API_KEY)
      .set('language', 'en')
      .set('limit', '10');

    return this.http.get<any>(`${this.BASE_URL}/news/top`, { params }).pipe(
      map((response: any) => response.data.map((item: any) => ({
        title: item.title,
        description: item.description,
        url: item.url,
        imageUrl: item.image_url,
        publishedAt: new Date(item.published_at),
        source: item.source,
        categories: item.categories || []
      })))
    );
  }

  searchNews(keyword: string): Observable<Article[]> {
    const params = new HttpParams()
      .set('api_token', this.API_KEY)
      .set('language', 'en')
      .set('search', keyword)
      .set('limit', '10');

    return this.http.get<any>(`${this.BASE_URL}/news/search`, { params }).pipe(
      map((response: any) => response.data.map((item: any) => ({
        title: item.title,
        description: item.description,
        url: item.url,
        imageUrl: item.image_url,
        publishedAt: new Date(item.published_at),
        source: item.source,
        categories: item.categories || []
      })))
    );
  }
} 
