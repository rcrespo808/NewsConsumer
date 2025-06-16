import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AboutComponent } from './components/about/about.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'feed', component: NewsListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
