import {Kacka} from "../kacka.js"

export class Cervena extends Kacka{
    constructor(x, y){
        super("cervena", document.getElementById('cervena'), x, y)
        this.height = 200
        this.width = 200
        this.x = x
        this.y = y

        this.indexHraca = 3
    }
    
}