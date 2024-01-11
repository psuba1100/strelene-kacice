import {Kacka} from "../kacka.js"

export class Voda extends Kacka{
    constructor(x, y){
        super("voda", document.getElementById('voda'), x, y)
        this.height = 200
        this.width = 200
        this.x = x
        this.y = y
    }
    
}