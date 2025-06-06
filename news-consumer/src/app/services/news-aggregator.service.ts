import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article.interface';
import { NewsSource } from './news-source.interface';
import { TheNewsApiService } from './the-news-api.service';
import { PreferencesService } from './preferences.service';

@Injectable({ providedIn: 'root' })
export class NewsAggregatorService {
  private sources: NewsSource[];

  constructor(
    private theNewsApi: TheNewsApiService,
    private prefs: PreferencesService
  ) {
    this.sources = [theNewsApi];
  }

  getCombinedNews(): Observable<Article[]> {
    const enabled = this.prefs.getEnabledSourceIds();
    const active = this.sources.filter(src =>
      enabled.length ? enabled.includes(src.id) : true
    );
    const requests = active.map(src => src.getLatestNews());

    if (!requests.length) {
      return of([]);
    }

    return forkJoin(requests).pipe(
      map((results: Article[][]) =>
        results
          .reduce((all: Article[], cur: Article[]) => all.concat(cur), [])
          .sort(
            (a: Article, b: Article) =>
              b.publishedAt.getTime() - a.publishedAt.getTime()
          )
      )
    );
  }
}
