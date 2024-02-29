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

        this.game.rybnik.kacky.forEach(karta => {
            karta.hasBorder = this.isClickedOnKarta(mouseX, mouseY, karta);
            console.log('clicked');
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