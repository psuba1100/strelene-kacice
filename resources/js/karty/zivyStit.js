import {Karta} from "../karta.js"

export class ZivyStit extends Karta{
    constructor(x, y){
        super("zivyStit", document.getElementById('zivyStit'), x, y)
        this.height = 200
        this.width = 129
        this.x = x
        this.y = y
    }
    
}