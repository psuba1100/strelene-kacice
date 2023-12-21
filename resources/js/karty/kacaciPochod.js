import {Karta} from "../karta.js"

class KacaciPochod extends Karta{
    constructor(x,y){
        this.nazovKarty = "kacaciPochod"
        this.obrazok = document.getElementById('kacaciPochod')
        this.x = x
        this.y = y
    }
    
}