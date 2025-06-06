import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../models/article.interface';

@Injectable({ providedIn: 'root' })
export class ArticleStateService {
  private selected = new BehaviorSubject<Article | null>(null);
  selected$ = this.selected.asObservable();

  setArticle(article: Article): void {
    this.selected.next(article);
  }

  getArticle(): Article | null {
    return this.selected.value;
  }
}
