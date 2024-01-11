import {Karta} from "../karta.js"

export class Unik extends Karta{
    constructor(x, y){
        super("unik", document.getElementById('unik'), x, y)
        this.height = 200
        this.width = 129
        this.x = x
        this.y = y
    }
    
}