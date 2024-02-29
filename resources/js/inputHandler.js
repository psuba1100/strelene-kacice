export class InputHandler {
    constructor(canvas, game, ctx) {
        this.canvas = canvas;
        this.game = game;
        this.ctx = ctx; // Store the context

        this.canvas.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        console.log(mouseX + ',' + mouseY);
        this.game.hraci[0].karty.forEach(karta => {
            console.log("/" + karta.x + "," + karta.y)
            if (this.isClickedOnKarta(mouseX, mouseY, karta)){
                
                console.log('clicked');
            }
            //karta.hasBorder = this.isClickedOnKarta(mouseX, mouseY, karta);
            
        });

        // Redraw the canvas using the stored context
        this.game.draw(this.ctx);
    }

    isClickedOnKarta(mouseX, mouseY, karta) {
        return (
            mouseX >= karta.x &&
            mouseX <= karta.x + karta.width &&
            mouseY >= karta.y &&
            mouseY <= karta.y + karta.height
        );
    }
}