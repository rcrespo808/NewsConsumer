import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Article } from '../../models/article.interface';
import { NewsAggregatorService } from '../../services/news-aggregator.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query = '';
  results: Article[] = [];
  loading = false;
  error = '';

  constructor(
    private searchService: SearchService,
    private aggregator: NewsAggregatorService
  ) {}

  ngOnInit() {
    this.searchService.searchTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => {
          if (!term.trim()) {
            this.results = [];
            return of([]);
          }
          this.loading = true;
          this.error = '';
          return this.aggregator.searchNews(term);
        })
      )
      .subscribe({
        next: articles => {
          this.results = articles;
          this.loading = false;
        },
        error: () => {
          this.error = 'Error fetching search results';
          this.loading = false;
        }
      });
  }

  onSearch() {
    this.searchService.emitSearch(this.query);
  }
}
