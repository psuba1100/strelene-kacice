import { getRandomPositionExceptCurrent, kacaciPochod, shuffleArray, unik, zivyStit } from "./functions.js";

export class InputHandler {
    constructor(canvas, game, ctx) {
        this.canvas = canvas;
        this.game = game;
        this.ctx = ctx;

        this.currentClick = false
        this.currentlyClickedCard = null
        this.currentlyClickedCardIndex = null
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

        let player = this.game.hraci[this.game.aktualnyHrac]
        for (const card of player.karty) {
            if (this.isClickedOnKarta(mouseX, mouseY, card)) {
                if (this.currentlyClickedCard) {
                    this.currentlyClickedCard.clicked = false
                }
                card.clicked = true
                this.currentlyClickedCard = card
                this.currentlyClickedCardIndex = player.karty.indexOf(card)
                this.currentClick = true
                console.log(player.karty, player)
                break
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
                            if(this.currentlyClickedKacka)this.currentlyClickedKacka.clicked = false
                            this.game.updateKarty(this.currentlyClickedCardIndex);

                            
                            this.clearCurrent()
                            break;
                        case "kacaciPochod":
                            this.game.poleHracov = kacaciPochod(this.game.poleHracov)
                            this.game.updateRybnik()
                            if(this.currentlyClickedKacka)this.currentlyClickedKacka.clicked = false
                            this.game.updateKarty(this.currentlyClickedCardIndex);

                            
                            this.clearCurrent()
                            break;
                        case "unik":
                            this.game.poleHracov = unik(this.game.poleHracov, i)
                            this.game.updateRybnik()
                            if(this.currentlyClickedKacka)this.currentlyClickedKacka.clicked = false
                            this.game.updateKarty(this.currentlyClickedCardIndex);

                            
                            this.clearCurrent()
                            break;
                        case "kacaciTanec":
                            this.game.poleHracov = shuffleArray(this.game.poleHracov);
                            this.game.updateRybnik();
                            if(this.currentlyClickedKacka)this.currentlyClickedKacka.clicked = false
                            this.game.updateKarty(this.currentlyClickedCardIndex);

                            
                            this.clearCurrent()
                            break;
                        case "zivyStit":
                            this.game.poleHracov = zivyStit(this.game.poleHracov, i, getRandomPositionExceptCurrent(i))
                            this.game.updateRybnik()
                            if(this.currentlyClickedKacka)this.currentlyClickedKacka.clicked = false
                            this.game.updateKarty(this.currentlyClickedCardIndex);
                            this.clearCurrent()
                            break;
                        case "vystrelit":
                            if (kacka.zamierene) {
                                this.game.zamierene[i] = false
                                if (this.game.rybnik.kacky[i].farba != "voda") {
                                    console.log(this.currentlyClickedKacka)
                                    console.log(this.game.hraci[this.currentlyClickedKacka.indexHraca])
                                    this.game.hraci[this.currentlyClickedKacka.indexHraca].pocetKacic--
                                    console.log(this.game.hraci)
                                    this.game.poleHracov.splice(i, 1)
                                    this.game.updateRybnik()
                                    if(this.currentlyClickedKacka)this.currentlyClickedKacka.clicked = false
                                    this.game.updateKarty(this.currentlyClickedCardIndex);
                                }
                            }
                            this.clearCurrent()
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
    clearCurrent() {
        if (this.currentlyClickedKacka) this.currentlyClickedKacka.clicked = false
        if (this.currentlyClickedCard) this.currentlyClickedCard.clicked = false
        this.currentlyClickedCard = null
        this.currentlyClickedCard = null
    }
}