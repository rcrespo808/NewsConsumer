import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  template: `
    <nav class="butler-bottom-nav" aria-label="Bottom navigation">
      <button
        *ngFor="let item of navItems; let i = index"
        class="bottom-nav-btn"
        [class.active]="activeIndex === i"
        (click)="onNav(i)"
        [attr.aria-current]="activeIndex === i ? 'page' : null"
        tabindex="0"
        [attr.aria-label]="item.label"
      >
        <span class="material-icons">{{ item.icon }}</span>
        <span class="nav-label">{{ item.label }}</span>
      </button>
    </nav>
  `,
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {
  @Output() navigate = new EventEmitter<string>();
  navItems = [
    { label: 'Home', icon: 'home' },
    { label: 'Bookmarks', icon: 'bookmark' },
    { label: 'Info', icon: 'info' }
  ];
  activeIndex = 0;

  onNav(index: number) {
    this.activeIndex = index;
    this.navigate.emit(this.navItems[index].label);
  }
} 