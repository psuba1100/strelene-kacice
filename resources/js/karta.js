export class Karta{
    constructor(nazovKarty, obrazok){
        this.nazovKarty = nazovKarty
        this.obrazok = obrazok
        this.x = 0
        this.y = 0
        this.height = 200
        this.width = 129
    }
    draw(context, x, y){
        this.x = x
        this.y = y
        context.drawImage(this.obrazok, this.x, this.y, this.width, this.height)
    }
}