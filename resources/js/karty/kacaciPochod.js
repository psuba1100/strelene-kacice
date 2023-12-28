import {Karta} from "../karta.js"

export class KacaciPochod extends Karta{
    constructor(x, y){
        super("kacaciPochod", document.getElementById('kacaciPochod'), x, y)
        this.height = 200
        this.width = 129
        this.x = x
        this.y = y
    }
    
}