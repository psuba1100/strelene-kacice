import {Kacka} from "../kacka.js"

export class Oranzova extends Kacka{
    constructor(x, y){
        super("oranzova", document.getElementById('oranzova'), x, y)
        this.height = 200
        this.width = 200
        this.x = x
        this.y = y

        this.indexHraca = 4
    }
    
}