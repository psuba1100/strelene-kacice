import {Kacka} from "../kacka.js"

export class Biela extends Kacka{
    constructor(x, y){
        super("biela", document.getElementById('biela'), x, y)
        this.height = 200
        this.width = 200
        this.x = x
        this.y = y

        this.indexHraca = 0
    }
    
}