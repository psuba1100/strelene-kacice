import {Karta} from "../karta.js"

export class Zamierit extends Karta{
    constructor(x, y){
        super("zamierit", document.getElementById('zamierit'), x, y)
        this.height = 200
        this.width = 129
        this.x = x
        this.y = y
    }
    
}