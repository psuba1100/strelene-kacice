import {Kacka} from "../kacka.js"

export class Zelena extends Kacka{
    constructor(x, y){
        super("zelena", document.getElementById('zelena'), x, y)
        this.height = 200
        this.width = 200
        this.x = x
        this.y = y

        this.indexHraca = 2
    }
    
}