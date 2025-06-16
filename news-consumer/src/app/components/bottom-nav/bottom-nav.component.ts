import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  template: `
    <nav class="butler-bottom-nav" aria-label="Bottom navigation">
      <a
        *ngFor="let item of navItems"
        class="bottom-nav-btn"
        routerLink="{{ item.path }}"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        [attr.aria-label]="item.label"
      >
        <span class="material-icons">{{ item.icon }}</span>
        <span class="nav-label">{{ item.label }}</span>
      </a>
    </nav>
  `,
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {
  navItems = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Bookmarks', icon: 'bookmark', path: '/bookmarks' },
    { label: 'Info', icon: 'info', path: '/about' }
  ];
}
