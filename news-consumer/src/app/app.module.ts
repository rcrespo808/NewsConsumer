import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AboutComponent } from './components/about/about.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ButlerNewsCardComponent } from './components/butler-news-card/butler-news-card.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { NEWS_SOURCE } from './services/news-source.interface';
import { TheNewsApiService } from './services/the-news-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    AboutComponent,
    ArticleDetailsComponent,
    ButlerNewsCardComponent,
    AppBarComponent,
    SidebarNavComponent,
    BottomNavComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    { provide: NEWS_SOURCE, useExisting: TheNewsApiService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
