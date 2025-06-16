import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-bookmarks',
  template: `
    <div class="bookmarks-container">
      <h1>Bookmarks</h1>
      <p *ngIf="bookmarks.length === 0">No bookmarks yet.</p>
      <app-article-list
        *ngIf="bookmarks.length"
        [articles]="bookmarks"
        (articleSelected)="selected = $event">
      </app-article-list>
      <app-article-detail
        *ngIf="selected"
        [article]="selected">
      </app-article-detail>
    </div>
  `,
  styles: [`
    .bookmarks-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 1rem;
    }
  `]
})
export class BookmarksComponent implements OnInit {
  bookmarks: Article[] = [];
  selected: Article | null = null;

  constructor(private bookmarksSvc: BookmarkService) {}

  ngOnInit(): void {
    this.bookmarks = this.bookmarksSvc.getBookmarks();
  }
}
