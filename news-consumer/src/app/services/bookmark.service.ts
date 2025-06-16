import { Injectable } from '@angular/core';
import { Article } from '../models/article.interface';

@Injectable({ providedIn: 'root' })
export class BookmarkService {
  private STORAGE_KEY = 'bookmarkedArticles';

  getBookmarks(): Article[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) {
      return [];
    }
    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  isBookmarked(article: Article): boolean {
    return this.getBookmarks().some(a => a.url === article.url);
  }

  add(article: Article): void {
    const bookmarks = this.getBookmarks();
    if (!bookmarks.some(a => a.url === article.url)) {
      bookmarks.push(article);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookmarks));
    }
  }

  remove(article: Article): void {
    const updated = this.getBookmarks().filter(a => a.url !== article.url);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
  }
}
