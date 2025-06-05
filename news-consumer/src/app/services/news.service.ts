import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    const { baseUrl, token } = environment.newsApi;
    const url = `${baseUrl}/news/top?categories=science&api_token=${token}`;
    return this.http.get(url);
  }
}
