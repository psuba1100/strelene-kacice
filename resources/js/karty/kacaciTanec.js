import {Karta} from "../karta.js"

export class KacaciTanec extends Karta{
    constructor(x, y){
        super("kacaciTanec", document.getElementById('kacaciTanec'), x, y)
        this.height = 200
        this.width = 129
        this.x = x
        this.y = y
    }
    
}