import { Component, OnInit } from '@angular/core';
import { LetterMatchingService } from '../letter-matching.service';

@Component({
  selector: 'app-result-block',
  templateUrl: './result-block.component.html',
  styleUrls: ['./result-block.component.css']
})
export class ResultBlockComponent implements OnInit {
  finalResult: number = 0;

  constructor(private letterMatchingService: LetterMatchingService) {}

  ngOnInit() {
  }





}
