export class Kacka{
    constructor(farba, obrazok){
        this.farba = farba
        this.obrazok = obrazok
        this.x = 0
        this.y = 0
        this.height = 200
        this.width = 200
    }
    draw(context, x, y){
        this.x = x
        this.y = y
        context.drawImage(this.obrazok, this.x, this.y, this.width, this.height)
    }
}