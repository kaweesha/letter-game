import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LetterService } from './letter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LetterService]
})
export class AppComponent implements OnInit {
  title = 'Letter Game';
  receivedPressedKey: string; 

  constructor(private router: Router, public letterService: LetterService) {}

  ngOnInit() {}

}
