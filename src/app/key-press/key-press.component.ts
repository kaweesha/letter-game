import { Component, OnInit, HostListener, Input} from '@angular/core';
import { letterItem } from '../letterItem.model';
import { LetterService } from '../letter.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-key-press',
  templateUrl: './key-press.component.html',
  styleUrls: ['./key-press.component.css'],
  providers: []
})
export class KeyPressComponent implements OnInit {
  @Input() displayLetter: string = "a";
  @Input() currentLetterItem: letterItem;
  pressedKey: string = "z";
  passCount: number = 0;
  failCount: number = 0;
  status: string;

  constructor(public letterService: LetterService) {}
  
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // console.log(event.keyCode);
    this.pressedKey = String.fromCharCode(event.keyCode);
    console.log("pressed key: " + this.pressedKey);
    console.log("currentLetterItem name: " + this.currentLetterItem.name);

    if(this.currentLetterItem.isAnyKeyPressed==false) {
      if(this.currentLetterItem.isLifeSpanEnded==false) {
        if(this.currentLetterItem.name==this.pressedKey) {
          this.passCount++;
          this.status = "passed";
        }
        else {
          this.failCount++;
          this.status = "failed";
        }
        this.currentLetterItem.isAnyKeyPressed=true;
        this.currentLetterItem.isLifeSpanEnded=true;
      }
      else {
        // this.currentLetterItem.isLifeSpanEnded=true;
      }
      this.currentLetterItem.isAnyKeyPressed=true;
    }else{
      console.log("You have already attempted.");
    }
    this.letterService.sendCurrentResults(this.passCount, this.failCount);
  }

  // public displayResults() {
  //     this.letterService.triggerDisplayResults.subscribe();
  // }

  ngOnInit() {}

}
