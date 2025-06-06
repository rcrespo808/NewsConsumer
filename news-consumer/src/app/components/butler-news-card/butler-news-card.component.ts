import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-butler-news-card',
  template: `
    <div class="news-card">
      <img *ngIf="article.imageUrl; else placeholder" [src]="article.imageUrl" [alt]="article.title" class="news-card-image" (error)="onImgError($event)">
      <ng-template #placeholder>
        <div class="news-card-placeholder">No image</div>
      </ng-template>
      <div class="news-card-content">
        <h3>{{ article.title }}</h3>
        <span class="source" *ngIf="article.source">{{ article.source }}</span>
        <p class="body-text" *ngIf="article.description">{{ article.description }}</p>
        <a *ngIf="article.url" [href]="article.url" target="_blank" rel="noopener">Read more</a>
      </div>
    </div>
  `,
  styles: [`
    .news-card { display: flex; flex-direction: column; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.08); background: #fff; margin-bottom: 1rem; }
    .news-card-image { width: 100%; height: 180px; object-fit: cover; border-radius: 8px 8px 0 0; }
    .news-card-placeholder { width: 100%; height: 180px; display: flex; align-items: center; justify-content: center; background: #eee; color: #888; border-radius: 8px 8px 0 0; }
    .news-card-content { padding: 1rem; }
    .source { color: #888; font-size: 0.9rem; margin-bottom: 0.5rem; display: block; }
    .body-text { margin: 0.5rem 0; }
    a { color: #007bff; }
  `]
})
export class ButlerNewsCardComponent {
  @Input() article!: Article;

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
} 