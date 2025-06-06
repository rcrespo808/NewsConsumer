import { Observable } from 'rxjs';
import { Article } from '../models/article.interface';

export interface NewsSource {
  id: string;
  displayName: string;
  getLatestNews(): Observable<Article[]>;
  searchNews(keyword: string): Observable<Article[]>;
} 