class Vrstvy {
    constructor(height, width, image){
        this.width = width;
        this.height = height;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.height, this.width);
    }
}

export class Pozadie {
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.prvyObrazok = document.getElementById('pozadie')
        this.vrstva1 = new Vrstvy(this.height, this.width, this.prvyObrazok)
        this.vrstvy = [this.vrstva1]
    }
    draw(context){
        this.vrstvy.forEach(vrstva => {
            vrstva.draw(context)
        })
    }
}