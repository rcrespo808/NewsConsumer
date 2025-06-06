import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreferencesService } from '../../services/preferences.service';

interface NewsSource {
  id: string;
  name: string;
  enabled: boolean;
  description: string;
}

@Component({
  selector: 'app-preferences',
  template: `
    <div class="preferences-container">
      <div class="preferences-header">
        <button class="back-button" (click)="goBack()">
          <i class="fas fa-arrow-left"></i>
          <span>Back to Feed</span>
        </button>
        <h1>Preferences</h1>
      </div>
      
      <section class="preference-section">
        <h2>Theme</h2>
        <div class="theme-toggle">
          <label class="switch">
            <input type="checkbox" [checked]="isDarkMode" (change)="toggleTheme($event)">
            <span class="slider round"></span>
          </label>
          <span class="theme-label">{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</span>
        </div>
      </section>

      <section class="preference-section">
        <h2>News Sources</h2>
        <div class="sources-list">
          <div *ngFor="let source of newsSources" class="source-item">
            <div class="source-info">
              <h3>{{ source.name }}</h3>
              <p>{{ source.description }}</p>
            </div>
            <label class="switch">
              <input type="checkbox" [checked]="source.enabled" (change)="updateSource(source, $event)">
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .preferences-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background-color: var(--butler-cream);
      min-height: 100vh;
    }

    .preferences-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      border-bottom: 2px solid var(--butler-gold);
      padding-bottom: 1rem;
    }

    .back-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: var(--butler-gold);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-family: 'Lora', serif;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: var(--butler-brown);
      }

      i {
        font-size: 0.9rem;
      }
    }

    h1 {
      font-family: 'Playfair Display', serif;
      color: var(--butler-brown);
      margin: 0;
    }

    .preference-section {
      background-color: white;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h2 {
      font-family: 'Playfair Display', serif;
      color: var(--butler-brown);
      margin-bottom: 1.5rem;
    }

    .theme-toggle {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .theme-label {
      font-family: 'Lora', serif;
      color: var(--butler-brown);
    }

    .sources-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .source-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border: 1px solid var(--butler-gold);
      border-radius: 4px;
      background-color: var(--butler-cream);
    }

    .source-info {
      flex: 1;
    }

    .source-info h3 {
      font-family: 'Playfair Display', serif;
      color: var(--butler-brown);
      margin: 0 0 0.5rem 0;
    }

    .source-info p {
      font-family: 'Lora', serif;
      color: var(--butler-brown);
      margin: 0;
      font-size: 0.9rem;
    }

    /* Switch styling */
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: var(--butler-gold);
    }

    input:focus + .slider {
      box-shadow: 0 0 1px var(--butler-gold);
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `]
})
export class PreferencesComponent implements OnInit {
  isDarkMode = false;
  newsSources: NewsSource[] = [
    {
      id: 'newsapi',
      name: 'News API',
      enabled: true,
      description: 'Global news coverage from various sources'
    },
    {
      id: 'guardian',
      name: 'The Guardian',
      enabled: false,
      description: 'International news and opinion'
    },
    {
      id: 'nyt',
      name: 'The New York Times',
      enabled: false,
      description: 'Breaking news, reviews and opinion'
    },
    {
      id: 'reuters',
      name: 'Reuters',
      enabled: false,
      description: 'Business, financial and world news'
    }
  ];

  constructor(
    private router: Router,
    private prefs: PreferencesService
  ) {}

  ngOnInit() {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();

    const savedSources = localStorage.getItem('newsSources');
    if (savedSources) {
      this.newsSources = JSON.parse(savedSources);
    }
    this.prefs.updateSources(this.newsSources);
  }

  goBack() {
    this.router.navigate(['/feed']);
  }

  toggleTheme(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.isDarkMode = checkbox.checked;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  updateSource(source: NewsSource, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    source.enabled = checkbox.checked;
    this.prefs.updateSources(this.newsSources);
  }
}
