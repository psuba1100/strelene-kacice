import {Pozadie} from "./pozadie.js"
import {Hrac} from "./hrac.js"
import { KacaciPochod } from "./karty/kacaciPochod.js";
import { Rybnik } from "./rybnik.js";
import { KacaciTanec } from "./karty/kacaciTanec.js";
import { Unik } from "./karty/unik.js";
import { Vystrelit } from "./karty/vystrelit.js";
import { Zamierit } from "./karty/zamierit.js";
import { ZivyStit } from "./karty/zivyStit.js";
import { shuffleArray } from "./funkcie.js";
import { Biela } from "./kacky/biela.js";
import { Modra } from "./kacky/modra.js";
import { Zelena } from "./kacky/zelena.js";
import { Voda } from "./kacky/voda.js";

let pocetHracov = 3

window.addEventListener("load", function(){
    const canvas = document.getElementById('hra')
    const ctx = canvas.getContext('2d');

    let balicek = []
    let poleHracov = []
    let hraci = []

    canvas.height = 700
    canvas.width = 1500

    class Game {
        constructor(height, width) {
            this.height = height
            this.width = width
            this.background = new Pozadie(this.height, this.width)
            this.rybnik = new Rybnik(this.height, this.width)
            this.kacaciPochod = new KacaciPochod(0, 0)

            this.karty = [
                new KacaciTanec(0, 0),
                new Unik(0, 0),
                new Vystrelit(0, 0),
                new Zamierit(0, 0),
                new ZivyStit(0, 0)
            ]

            this.kacky = [
                new Biela(0, 0),
                new Modra(0, 0),
                new Zelena(0, 0),
            ]
            this.voda = new Voda(0, 0)


            this.zaciatok()
        }

        zaciatok(){

            for (let i = 0; i < this.karty.length; i++) {
                for (let j = 0; j < 10; j++) {
                    balicek.push(this.karty[i])
                }               
            }

            balicek = shuffleArray(balicek)

            for (let index = 0; index < pocetHracov; index++) {
                let newPlayer = new Hrac(index, 6, this.kacky[index])
                newPlayer.karty.push(balicek[index], balicek[1 + index], balicek[2 + index])
                balicek.splice(0, 3)
                hraci.push(newPlayer)
            }

            for (let i = 0; i < pocetHracov; i++) {
                for (let j = 0; j < 3; j++) {
                    poleHracov.push(this.kacky[i])
                }
            }
            
            for (let j = 0; j < 3; j++) {
                poleHracov.push(this.voda)
            }

            poleHracov = shuffleArray(poleHracov)

            console.log(balicek, poleHracov, hraci)

            

            for (let i = 0; i < 5; i++) {
                this.rybnik.kacky.push(poleHracov[i])
            }
            console.log(this.rybnik.kacky)
        }

        draw(context){
            this.background.draw(context)
            hraci[0].drawK(context, canvas.height, canvas.width)
            this.rybnik.draw(context)
            this.rybnik.drawKacky(context)
        }
    }



    const game = new Game(canvas.height, canvas.width)
    game.draw(ctx)
})