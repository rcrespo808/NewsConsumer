import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.interface';

export interface NewsSource {
  id: string;
  displayName: string;
  getLatestNews(): Observable<Article[]>;
  searchNews(keyword: string): Observable<Article[]>;
}

export const NEWS_SOURCE = new InjectionToken<NewsSource>('NEWS_SOURCE');
