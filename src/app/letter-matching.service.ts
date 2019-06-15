export class LetterMatchingService {
    receivedKey: string = "0";
    generatedLetter: string = "0";
    result: string = "asdf";

    getPressedKey(pressedKey: string) {
        this.receivedKey = pressedKey;
        console.log("Pressed key: "+ this.receivedKey);
    }

    getDisplayLetter(displayingLetter: string){
        this.generatedLetter = displayingLetter;
        console.log("Displaying letter: "+ this.generatedLetter);
    }

    matchLetters() {
        if (this.generatedLetter==this.receivedKey) {
            console.log("Pass");
        }else{
            console.log("Fail");
        }
    }




}