export class Karta{
    constructor(nazovKarty, obrazok){
        this.nazovKarty = nazovKarty
        this.obrazok = obrazok
        this.x = 0
        this.y = 0
        this.height = 200
        this.width = 129
        this.clicked = false
    }
    draw(context, x, y){
        this.x = x
        this.y = y
        context.drawImage(this.obrazok, this.x, this.y, this.width, this.height)
        if (this.clicked == true){
            context.strokeStyle = 'yellow'
            context.lineWidth = 5
            context.strokeRect(this.x, this.y, this.width, this.height)
        }
    }
}