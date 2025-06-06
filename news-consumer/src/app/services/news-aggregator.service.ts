import { Inject, Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Article } from '../models/article.interface';
import { NEWS_SOURCE, NewsSource } from './news-source.interface';
import { PreferencesService } from './preferences.service';

@Injectable({ providedIn: 'root' })
export class NewsAggregatorService {
  constructor(
    @Inject(NEWS_SOURCE) private sources: NewsSource[],
    private preferences: PreferencesService
  ) {}

  getCombinedNews(): Observable<Article[]> {
    return this.preferences.enabledSources$.pipe(
      switchMap(ids => {
        const observables = this.sources
          .filter(s => ids.includes(s.id))
          .map(s => s.getLatestNews());
        if (observables.length === 0) {
          return of([]);
        }
        return combineLatest(observables).pipe(
          map(results =>
            results
              .reduce((acc, cur) => acc.concat(cur), [])
              .sort(
                (a, b) =>
                  b.publishedAt.getTime() - a.publishedAt.getTime()
              )
          )
        );
      })
    );
  }
}

