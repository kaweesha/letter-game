export class letterItem {

    public name: string;
    public isLifeSpanEnded: boolean;
    public isAnyKeyPressed: boolean;

    constructor(name: string, isLifeSpanEnded: boolean, isAnyKeyPressed: boolean) {

        this.name = name;
        this.isLifeSpanEnded = isLifeSpanEnded;
        this.isAnyKeyPressed = isAnyKeyPressed;
    }

}