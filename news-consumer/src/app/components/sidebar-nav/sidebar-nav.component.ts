import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  template: `
    <nav class="butler-sidebar-nav" aria-label="Main navigation">
      <ul>
        <li *ngFor="let item of navItems; let i = index">
          <button
            class="sidebar-nav-btn"
            [class.active]="activeIndex === i"
            (click)="onNav(i)"
            (keydown.enter)="onNav(i)"
            (keydown.space)="onNav(i)"
            [attr.aria-current]="activeIndex === i ? 'page' : null"
            tabindex="0"
          >
            {{ item }}
          </button>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent {
  @Output() navigate = new EventEmitter<string>();
  navItems = ['Home', 'Articles', 'About'];
  activeIndex = 0;

  onNav(index: number) {
    this.activeIndex = index;
    this.navigate.emit(this.navItems[index]);
  }
} 