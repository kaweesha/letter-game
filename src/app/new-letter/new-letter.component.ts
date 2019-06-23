import { Component, OnInit} from '@angular/core';
import {letterItem} from '../letterItem.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.css']
})
export class NewLetterComponent implements OnInit {

  generatedLetter: string;
  intervalId;
  isRun: boolean = false;
  allLetters: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  generatedNumber: number = 0;
  newPositionFromLeft: string = "10";
  newPositionFromTop: string = "10";
  newLetterItem: letterItem;
  results: number[] = [0,0];

  constructor(public router: Router) {
    // this.asdf = Math.floor(Math.random() * 26);
  }

  public startGettingLetters() {
      this.setTime();
      console.log("start getting letters");
  }

  public stopGettingLetters($event) {
    clearInterval(this.intervalId);
    console.log("stopped getting letters");

    this.router.navigate(['/resultsPage']);
  }

  public setTime() {
    this.intervalId = setInterval(()=>{ this.getNewLetter() },2000);
    console.log("intervalId: "+this.intervalId);
  }

  public getNewLetter() {
    this.generatedNumber = Math.floor(Math.random() * 25);
    // console.log(this.generatedNumber);

    // this.letterGenerator(); 
    this.createLetterItem(this.generatedNumber);
  }
  
  public createLetterItem(generatedNumber: number) {
    this.newLetterItem = new letterItem(this.allLetters[generatedNumber], false, false);
    this.generatedLetter = this.newLetterItem.name;
    this.setPosition();
    console.log("Letter name: "+this.newLetterItem.name);
  }

  public letterGenerator() {
    this.generatedLetter = this.allLetters[this.generatedNumber];
    console.log(this.generatedLetter);

    this.setPosition();
  }

  public setPosition() {
    this.newPositionFromLeft = Math.random()*450 + "px";
    this.newPositionFromTop = Math.random()*450 + "px";
    // console.log("from left: "+this.newPositionFromLeft);
    // console.log("from top: "+this.newPositionFromTop);
  }

  ngOnInit() {
    this.startGettingLetters();
  }
}