export class InputHandler {
    constructor(canvas, game, ctx) {
        this.canvas = canvas;
        this.game = game;
        this.ctx = ctx;

        this.currentlyClickedCard = null
        this.currentlyClickedKacka = null

        this.canvas.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width
        const scaleY = this.canvas.height / rect.height
        const mouseX = (event.clientX - rect.left) * scaleX;
        const mouseY = (event.clientY - rect.top) * scaleY;

        if (this.currentlyClickedCard) {
            this.currentlyClickedCard.clicked = false
        }

        if (this.currentlyClickedKacka) {
            this.currentlyClickedKacka.clicked = false
        }

        for (const player of this.game.hraci) {
            for (const card of player.karty) {
                if (this.isClickedOnKarta(mouseX, mouseY, card)) {
                    card.clicked = true
                    this.currentlyClickedCard = card
                    break
                }
            }
        }

        for (const kacka of this.game.rybnik.kacky) {
            if (this.isClickedOnKarta(mouseX, mouseY, kacka)) {
                kacka.clicked = true
                this.currentlyClickedKacka = kacka
                break
            }
        }

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