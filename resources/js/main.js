import {Pozadie} from "./pozadie.js"
import {Hrac} from "./hrac.js"
import { KacaciPochod } from "./karty/kacaciPochod.js";
import { Rybnik } from "./rybnik.js";

window.addEventListener("load", function(){
    const canvas = document.getElementById('hra')
    const ctx = canvas.getContext('2d');

    canvas.height = 700
    canvas.width = 1500

    class Game {
        constructor(height, width) {
            this.height = height
            this.width = width
            this.background = new Pozadie(this.height, this.width)
            this.foreground = new Rybnik(this.height, this.width)
            this.player = new Hrac(1, 6, "ruzova")
            this.kacaciPochod = new KacaciPochod(0, 0)
            this.player.karty.push(this.kacaciPochod)
            this.player.karty.push(this.kacaciPochod)

        }
        draw(context){
            this.background.draw(context)
            this.player.drawK(context, canvas.height, canvas.width)
            this.foreground.draw(context)
        }
    }

    const game = new Game(canvas.height, canvas.width)
    game.draw(ctx)
})