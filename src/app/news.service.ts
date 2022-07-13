import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  public postNews(news: string): any {
    const data = this.http.post<any>('https://falsy-news.siddharthg123.repl.co/', {Text:news});
    console.log(data)
    return data;
  } 
}
