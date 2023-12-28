export class Hrac{
    constructor(id, pocetKacic, farba){
        this.id = id
        this.pocetKacic = pocetKacic
        this.farba = farba
        this.karty = []
    }
    drawK(context, canvasHeight, canvasWidth){
        const width = 129
        const height = 200
        const medzera = 20
        const widthKariet = this.karty.length * width + (this.karty.length-1) * medzera
        const iks = canvasWidth / 2 - widthKariet / 2
        this.karty.forEach((karta, i)=>{
            const x = iks + i * (width + medzera)
            const y = canvasHeight - height - medzera
            karta.draw(context, x, y)
        })
    }
}