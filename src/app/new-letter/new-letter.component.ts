import { Component, OnInit} from '@angular/core';

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


  constructor() {
    // this.asdf = Math.floor(Math.random() * 26);
  }

  public startGettingLetters($event) {
      this.setTime();
      console.log("start getting letters");
  }

  public stopGettingLetters($event) {
    clearInterval(this.intervalId);
    console.log("stopped getting letters");
  }

  public setTime() {
    this.intervalId = setInterval(()=>{ this.getNewLetter() },3000);
    console.log("intervalId: "+this.intervalId);
  }

  public getNewLetter() {
    this.generatedNumber = Math.floor(Math.random() * 25);
    // console.log(this.generatedNumber);

    this.letterGenerator();   
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
  }

}
