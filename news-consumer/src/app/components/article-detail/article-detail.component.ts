import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-article-detail',
  template: `
    <div class="article-detail">
      <h2>{{ article.title }}</h2>
      <span *ngIf="article.source">• {{ article.source }}</span>
      <img *ngIf="article.imageUrl" [src]="article.imageUrl" [alt]="article.title" class="detail-image" (error)="onImgError($event)">
      <p *ngIf="article.description">{{ article.description }}</p>
      <ng-content></ng-content>
      <a *ngIf="article.url" [href]="article.url" target="_blank" rel="noopener">Read full article</a>
    </div>
  `,
  styles: [`
    .article-detail { padding: 1rem; }
    .detail-image { width: 100%; max-width: 600px; margin: 1rem 0; border-radius: 8px; }
    h2 { margin-bottom: 0.5rem; }
    span { color: #888; font-size: 0.9rem; margin-bottom: 1rem; display: block; }
    a { display: inline-block; margin-top: 1rem; color: #007bff; }
  `]
})
export class ArticleDetailComponent {
  @Input() article!: Article;

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
} 