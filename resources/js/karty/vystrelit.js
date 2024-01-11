import {Karta} from "../karta.js"

export class Vystrelit extends Karta{
    constructor(x, y){
        super("vystrelit", document.getElementById('vystrelit'), x, y)
        this.height = 200
        this.width = 129
        this.x = x
        this.y = y
    }
    
}