import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-article-list',
  template: `
    <section class="butler-article-list">
      <ng-container *ngIf="articles && articles.length; else placeholderList">
        <div *ngFor="let article of articles" class="butler-article-card">
          <div class="card-thumb-wrapper">
            <img *ngIf="article.urlToImage; else thumbPlaceholder" [src]="article.urlToImage" [alt]="article.title" class="card-thumb" (error)="onImgError($event)">
            <ng-template #thumbPlaceholder>
              <div class="card-thumb card-thumb-placeholder"></div>
            </ng-template>
          </div>
          <div class="card-content">
            <div class="card-title">{{ article.title }}</div>
            <div class="card-excerpt">{{ article.description || article.content || '' }}</div>
          </div>
        </div>
      </ng-container>
      <ng-template #placeholderList>
        <div *ngFor="let n of [1,2,3,4]" class="butler-article-card placeholder">
          <div class="card-thumb-wrapper">
            <div class="card-thumb card-thumb-placeholder"></div>
          </div>
          <div class="card-content">
            <div class="card-title">Lorem ipsum dolor sit amet</div>
            <div class="card-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
      </ng-template>
    </section>
  `,
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  @Input() articles: Article[] = [];

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
} 