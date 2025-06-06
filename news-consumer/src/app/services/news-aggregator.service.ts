import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Article } from '../models/article.interface';
import { TheNewsApiService } from './the-news-api.service';
import { NewsSource } from './news-source.interface';

@Injectable({ providedIn: 'root' })
export class NewsAggregatorService {
  private sources: { [id: string]: NewsSource };

  constructor(private theNewsApi: TheNewsApiService) {
    this.sources = {
      theNewsApi: this.theNewsApi
    };
  }

  getEnabledSourceIds(): string[] {
    const saved = localStorage.getItem('newsSources');
    if (!saved) return Object.keys(this.sources);
    try {
      const parsed = JSON.parse(saved);
      return parsed.filter((s: any) => s.enabled).map((s: any) => s.id);
    } catch {
      return Object.keys(this.sources);
    }
  }

  getLatestNews(): Observable<Article[]> {
    const enabledIds: string[] = this.getEnabledSourceIds();
    if (enabledIds.length === 0) {
      return of([]);
    }
    const observables: Observable<Article[]>[] = enabledIds
      .filter((id: string) => this.sources[id])
      .map((id: string) => this.sources[id].getLatestNews().pipe(
        catchError(() => of([]))
      ));
    return forkJoin(observables).pipe(
      map((results: Article[][]) => results.reduce((acc: Article[], val: Article[]) => acc.concat(val), []))
    );
  }

  searchNews(keyword: string): Observable<Article[]> {
    const enabledIds: string[] = this.getEnabledSourceIds();
    if (enabledIds.length === 0) {
      return of([]);
    }
    const observables: Observable<Article[]>[] = enabledIds
      .filter((id: string) => this.sources[id])
      .map((id: string) => this.sources[id].searchNews(keyword).pipe(
        catchError(() => of([]))
      ));
    return forkJoin(observables).pipe(
      map((results: Article[][]) => results.reduce((acc: Article[], val: Article[]) => acc.concat(val), []))
    );
  }
} 