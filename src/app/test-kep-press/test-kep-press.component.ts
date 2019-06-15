import { Component, OnInit, HostListener, Input} from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-test-kep-press',
  templateUrl: './test-kep-press.component.html',
  styleUrls: ['./test-kep-press.component.css'],
})
export class TestKepPressComponent implements OnInit {
  @Input() displayLetter: string = "a";
  pressedKey: string = "z";
  passCount: number = 0;
  status: string;

  constructor() {}
  
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // console.log(event.keyCode);
    this.pressedKey = String.fromCharCode(event.keyCode);
    console.log("pressed key: " + this.pressedKey);
    console.log("displaying letter: " + this.displayLetter);


    if (this.pressedKey==this.displayLetter) {
      this.passCount++;
      this.status = "passed";
    } else {
      this.status = "failed";
    }
  }

  ngOnInit() {}

}
