export class InputHandler {
    constructor(canvas, game, ctx) {
        this.canvas = canvas;
        this.game = game;
        this.ctx = ctx; // Store the context

        this.scaleHeight = window.innerWidth / 1500
        this.scaleWidth = window.innerHeight / 700
        this.scale = 1

        this.canvas.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        console.log(`Pozicia mys: ['${mouseX}', '${mouseY}']`);

        if (window.innerHeight < 700 && 
            window.innerWidth < 1500) {
            if (window.innerWidth * (7/15) >  window.innerHeight) {
                this.scale = this.scaleHeight
            }else{
                this.scale = this.scaleWidth
            }
        }else if(window.innerHeight > 700 &&
                window.innerWidth < 1500){
                this.scale = this.scaleWidth
        }else if(window.innerHeight < 700 &&
                window.innerWidth > 1500){
                    this.scale = this.scaleHeight
        }else{
            this.scale = 1 //uwu
        }

        this.game.hraci[0].karty.forEach(karta => {

            console.log(`Pozicia karty ${karta.nazovKarty}: ['${karta.x * this.scale}','${karta.y * this.scale}']`)

            if (this.isClickedOnKarta(mouseX, mouseY, karta, this.scale)){
                
                console.log(`click ${karta.nazovKarty}`);
            }
            //karta.hasBorder = this.isClickedOnKarta(mouseX, mouseY, karta);
            
        });

        // Redraw the canvas using the stored context
        this.game.draw(this.ctx);
    }

    isClickedOnKarta(mouseX, mouseY, karta, scale) {

        return (
            mouseX >= karta.x * scale &&
            mouseX <= ( karta.x + karta.width )* scale &&
            mouseY >= karta.y * scale &&
            mouseY <= ( karta.y + karta.height ) * scale
        );
    }
}