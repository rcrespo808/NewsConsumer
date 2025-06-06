import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-article-detail',
  template: `
    <section class="butler-article-detail" *ngIf="article; else placeholder">
      <h1 class="detail-title">{{ article.title }}</h1>
      <div class="detail-meta">
        <span *ngIf="article.author">By {{ article.author }}</span>
        <span *ngIf="article.publishedAt">• {{ article.publishedAt | date:'longDate' }}</span>
        <span *ngIf="article.source?.name">• {{ article.source.name }}</span>
      </div>
      <img *ngIf="article.urlToImage" [src]="article.urlToImage" [alt]="article.title" class="detail-image" (error)="onImgError($event)">
      <div class="detail-body">
        <p *ngIf="article.description" class="detail-lead"><em>{{ article.description }}</em></p>
        <p *ngIf="article.content">{{ article.content }}</p>
      </div>
      <a *ngIf="article.url" [href]="article.url" target="_blank" class="butler-link detail-link">Read original article</a>
    </section>
    <ng-template #placeholder>
      <section class="butler-article-detail placeholder">
        <h1 class="detail-title">Select an article to read</h1>
        <p class="detail-lead"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.</em></p>
      </section>
    </ng-template>
  `,
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent {
  @Input() article: Article | null = null;

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
} 