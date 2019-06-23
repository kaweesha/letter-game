import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class LetterService {
    passCount: number = 0;
    failCount: number = 0;

    triggerDisplayResults = new EventEmitter();

    sendCurrentResults(pass: number, fail: number) {
        this.passCount = pass;
        this.failCount = fail;
        // console.log("passCount: "+this.passCount);
        // console.log("failCount: "+this.failCount);
    }

    getCurrentResults() {
        return [this.passCount,this.failCount];
    }
}