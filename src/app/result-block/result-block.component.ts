import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LetterService } from '../letter.service';

@Component({
  selector: 'app-result-block',
  templateUrl: './result-block.component.html',
  styleUrls: ['./result-block.component.css'],
  // providers: [LetterService]
})
export class ResultBlockComponent implements OnInit {
  passCount: number = 0;
  failCount: number = 0;

  constructor(public letterService: LetterService, public router: Router) {}

  ngOnInit() {
    this.passCount = this.letterService.getCurrentResults()[0];
    this.failCount = this.letterService.getCurrentResults()[1];
    console.log('passCount: '+ this.passCount);
    console.log('failCount: '+ this.failCount);
  }





}
