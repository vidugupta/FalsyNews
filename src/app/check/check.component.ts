import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  constructor(public newsService: NewsService) { }
  news: string = ""
  ngOnInit(): void {
    
  }

  checkNews(): any {
    this.newsService.postNews(this.news).subscribe((response: any) => {
      console.log(response)
    })
  }
}
