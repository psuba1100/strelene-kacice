import {Kacka} from "../kacka.js"

export class Ruzova extends Kacka{
    constructor(x, y){
        super("ruzova", document.getElementById('ruzova'), x, y)
        this.height = 200
        this.width = 200
        this.x = x
        this.y = y

        this.indexHraca = 5
    }
    
}