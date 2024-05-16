import {Kacka} from "../kacka.js"

export class Modra extends Kacka{
    constructor(x, y){
        super("modra", document.getElementById('modra'), x, y)
        this.height = 200
        this.width = 200
        this.x = x
        this.y = y

        this.indexHraca = 1
    }
    
}