import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showCheck = false;
  constructor() { }

  ngOnInit(): void {
  }

  showChecked() {
    console.log("hey")
    this.showCheck = true;
  }
}
