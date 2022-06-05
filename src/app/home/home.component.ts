import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() clicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.clicked.emit();
  }
}
