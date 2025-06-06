import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';
import { Article } from '../../models/article.interface';
import { ArticleStateService } from '../../services/article-state.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article: Article | null = null;
  safeContent: SafeHtml | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleState: ArticleStateService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.article = history.state.article || this.articleState.getArticle();
    if (!this.article) {
      const id = this.route.snapshot.paramMap.get('id');
      console.warn('No article data for id', id);
      return;
    }
    const sanitized = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.article.content || ''
    ) || '';
    this.safeContent = this.sanitizer.bypassSecurityTrustHtml(sanitized);
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  backToList(): void {
    this.router.navigate(['/']);
  }
}
