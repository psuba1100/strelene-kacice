import {Karta} from "../karta.js"

class Zamierit extends Karta{
    constructor(x,y){
        this.nazovKarty = "zamierit"
        this.obrazok = document.getElementById('zamierit')
        this.x = x
        this.y = y
    }
    
}