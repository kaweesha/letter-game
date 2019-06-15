import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-game';
  finalResult: number = 0;
  receivedPressedKey: string; 

  constructor() {
    // this.asdf = Math.floor(Math.random() * 26);
  }

  ngOnInit() {}


}
