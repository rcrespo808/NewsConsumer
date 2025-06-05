import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AboutComponent } from './components/about/about.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
