export class Kacka{
    constructor(farba, obrazok){
        this.farba = farba
        this.obrazok = obrazok
        this.x = 0
        this.y = 0
        this.height = 200
        this.width = 200
        this.clicked = false

        this.zamierene = false
        this.terc = document.getElementById('terc');
    }
    updateZamierene(){
        
    }
    draw(context, x, y){
        this.x = x
        this.y = y
        context.drawImage(this.obrazok, this.x, this.y, this.width, this.height)
        if (this.clicked){
            context.strokeStyle = 'red'
            context.lineWidth = 5
            context.strokeRect(this.x, this.y, this.width, this.height)
        }
        if (this.zamierene) {
            context.drawImage(this.terc, this.x, this.y, this.width, this.height)
        }
    }
}