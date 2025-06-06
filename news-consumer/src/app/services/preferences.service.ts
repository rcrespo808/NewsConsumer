import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SourcePreference {
  id: string;
  enabled: boolean;
}

@Injectable({ providedIn: 'root' })
export class PreferencesService {
  private sourceSubject = new BehaviorSubject<SourcePreference[]>(
    this.readSources()
  );
  sourceChange$ = this.sourceSubject.asObservable();

  getEnabledSourceIds(): string[] {
    return this.readSources()
      .filter(s => s.enabled)
      .map(s => s.id);
  }

  updateSources(sources: SourcePreference[]): void {
    localStorage.setItem('newsSources', JSON.stringify(sources));
    this.sourceSubject.next(sources);
  }

  private readSources(): SourcePreference[] {
    const str = localStorage.getItem('newsSources');
    if (str) {
      try {
        return JSON.parse(str);
      } catch {
        return [];
      }
    }
    return [];
  }
}
