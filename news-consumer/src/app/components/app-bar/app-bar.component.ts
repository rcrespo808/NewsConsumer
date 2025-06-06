import { Component } from '@angular/core';
import { ButlerIcons } from 'src/assets/butler-icons';

@Component({
  selector: 'app-app-bar',
  template: `
    <div class="app-bar">
      <div class="app-bar-left">
        <img [src]="butlerIcon" alt="Butler Portrait" class="butler-avatar" />
        <h1>Butler Brief</h1>
      </div>
    </div>
  `,
  styles: [
    `.app-bar { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background-color: var(--butler-cream); border-bottom: 2px solid var(--butler-gold); }`,
    `.app-bar-left { display: flex; align-items: center; gap: 1rem; }`,
    `.butler-avatar { width: 48px; height: 48px; border-radius: 50%; border: 2px solid var(--butler-gold); }`,
    `h1 { margin: 0; font-family: 'Playfair Display', serif; color: var(--butler-brown); }`
  ]
})
export class AppBarComponent {
  butlerIcon = ButlerIcons['6464.png'];
} 