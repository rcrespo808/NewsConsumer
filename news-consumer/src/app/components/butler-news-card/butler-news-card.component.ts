import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-butler-news-card',
  template: `
    <div class="butler-card" (click)="onCardClick()">
      <div class="news-card-header">
        <div class="news-card-image-wrapper">
          <img *ngIf="article.urlToImage; else placeholder" [src]="article.urlToImage" [alt]="article.title" class="news-card-image" (error)="onImgError($event)">
          <ng-template #placeholder>
            <div class="butler-placeholder">No image available</div>
          </ng-template>
        </div>
        <div class="news-card-meta">
          <div class="article-title">{{ article.title }}</div>
          <div class="meta">
            <span>{{ article.source.name }}</span>
            <span class="timestamp">• {{ article.publishedAt | date:'mediumDate' }}</span>
          </div>
        </div>
      </div>
      <div class="news-card-body">
        <p class="body-text" [ngClass]="{'lead': article.description}"><em *ngIf="article.description">{{ article.description }}</em></p>
        <p class="body-text" *ngIf="article.content">{{ article.content }}</p>
      </div>
      <div class="news-card-footer">
        <a class="butler-link" [href]="article.url" target="_blank">Read full article</a>
        <span *ngIf="article.author" class="caption">By {{ article.author }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./butler-news-card.component.scss']
})
export class ButlerNewsCardComponent {
  @Input() article!: Article;
  @Output() cardClick = new EventEmitter<Article>();

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  onCardClick() {
    this.cardClick.emit(this.article);
  }
} 