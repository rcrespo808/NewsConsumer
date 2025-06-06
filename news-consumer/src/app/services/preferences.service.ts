import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PreferencesService {
  private readonly STORAGE_KEY = 'enabledNewsSources';
  private enabledSourcesSubject = new BehaviorSubject<string[]>(
    this.loadEnabledSources()
  );

  enabledSources$ = this.enabledSourcesSubject.asObservable();

  getEnabledSources(): string[] {
    return this.enabledSourcesSubject.value;
  }

  toggleSource(id: string, enabled: boolean): void {
    const current = this.loadEnabledSources();
    let updated = current.slice();
    if (enabled && !updated.includes(id)) {
      updated.push(id);
    } else if (!enabled) {
      updated = updated.filter(s => s !== id);
    }
    this.saveEnabledSources(updated);
  }

  private loadEnabledSources(): string[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : ['the-news-api'];
  }

  private saveEnabledSources(ids: string[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ids));
    this.enabledSourcesSubject.next(ids);
  }
}

