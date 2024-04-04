import { kacaciPochod, shuffleArray, unik, updateRybnik, vystrelit } from "./functions.js";
import { Voda } from "./kacky/voda.js";

export class InputHandler {
    constructor(canvas, game, ctx) {
        this.canvas = canvas;
        this.game = game;
        this.ctx = ctx;

        this.currentClick = false
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

        this.currentClick = false

        for (const player of this.game.hraci) {
            for (const card of player.karty) {
                if (this.isClickedOnKarta(mouseX, mouseY, card)) {
                    if (this.currentlyClickedCard) {
                        this.currentlyClickedCard.clicked = false
                    }
                    card.clicked = true
                    this.currentlyClickedCard = card
                    this.currentClick = true
                    break
                }
            }
        }

        for (let i = 0; i < this.game.rybnik.kacky.length; i++) {
            let kacka = this.game.rybnik.kacky[i];

            if (this.isClickedOnKarta(mouseX, mouseY, kacka)) {
                if (this.currentlyClickedKacka) {
                    this.currentlyClickedKacka.clicked = false
                }

                if (this.currentlyClickedCard) {

                    switch (this.currentlyClickedCard.nazovKarty) {
                        case "zamierit":
                            this.game.zamierene[i] = true;
                            break;
                        case "kacaciPochod":
                            this.game.poleHracov = kacaciPochod(this.game.poleHracov)
                            this.game.updateRybnik()
                            break;
                        case "unik":
                            this.game.poleHracov = unik(this.game.poleHracov, i)
                            this.game.updateRybnik()
                            break;
                        case "kacaciTanec":
                            this.game.poleHracov = shuffleArray(this.game.poleHracov);
                            this.game.updateRybnik();
                            break;
                        case "vystrelit":
                            if (kacka.zamierene) {
                                this.game.zamierene[i] = false
                                this.game.poleHracov = vystrelit(this.game.poleHracov, i, new Voda(0, 0))
                                this.game.updateRybnik()
                            }
                            break;
                        default:
                            break;
                    }
                }
                kacka.clicked = true
                this.currentlyClickedKacka = kacka
                this.currentClick = true
                break
            }
        }

        for (let i = 0; i < this.game.poleHracov.length; i++) {
            let kacka = this.game.poleHracov[i];

            if (this.game.zamierene[i]) {
                kacka.zamierene = true
            }
            else {
                kacka.zamierene = false
            }
        }

        if (this.currentClick == false) {
            if (this.currentlyClickedCard) {
                this.currentlyClickedCard.clicked = false
            }
            if (this.currentlyClickedKacka) {
                this.currentlyClickedKacka.clicked = false
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