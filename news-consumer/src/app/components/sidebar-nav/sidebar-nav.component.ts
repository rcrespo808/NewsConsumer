import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-nav',
  template: `
    <nav class="sidebar-nav">
      <ul>
        <li>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <i class="fas fa-newspaper"></i>
            <span>Latest News</span>
          </a>
        </li>
        <li>
          <a routerLink="/search" routerLinkActive="active">
            <i class="fas fa-search"></i>
            <span>Search</span>
          </a>
        </li>
        <li>
          <a routerLink="/preferences" routerLinkActive="active">
            <i class="fas fa-cog"></i>
            <span>Preferences</span>
          </a>
        </li>
        <li>
          <a routerLink="/about" routerLinkActive="active">
            <i class="fas fa-info-circle"></i>
            <span>About</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .sidebar-nav {
      height: 100%;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 0.5rem;
    }

    a {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      color: var(--butler-brown);
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.2s ease;
      gap: 0.75rem;

      &:hover {
        background-color: var(--butler-gold);
        color: white;
      }

      &.active {
        background-color: var(--butler-gold);
        color: white;
      }
    }

    i {
      width: 20px;
      text-align: center;
    }

    span {
      font-family: 'Lora', serif;
    }
  `]
})
export class SidebarNavComponent {} 