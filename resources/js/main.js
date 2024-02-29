import { Pozadie } from "./pozadie.js"
import { Hrac } from "./hrac.js"
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
import { InputHandler } from "./inputHandler.js";

let pocetHracov = 3

window.addEventListener("load", function () {

    const canvas = document.getElementById('hra')
    const ctx = canvas.getContext('2d');

    canvas.height = 700
    canvas.width = 1500

    class Game {
        constructor(height, width) {
            this.height = height
            this.width = width
            this.input = new InputHandler(canvas, this, ctx)
            this.background = new Pozadie(this.height, this.width)
            this.rybnik = new Rybnik(this.height, this.width)
            this.kacaciPochod = new KacaciPochod(0, 0)
            this.balicek = []
            this.poleHracov = []
            this.hraci = []

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

            this.dataToSend = []

            this.zaciatok()
        }

        zaciatok() {

            for (let i = 0; i < this.karty.length; i++) {
                for (let j = 0; j < 10; j++) {
                    this.balicek.push(this.karty[i])
                }
            }

            this.balicek = shuffleArray(this.balicek)

            for (let index = 0; index < pocetHracov; index++) {
                let newPlayer = new Hrac(index, 6, this.kacky[index])
                newPlayer.karty.push(this.balicek[index], this.balicek[1 + index], this.balicek[2 + index])
                this.balicek.splice(0, 3)
                this.hraci.push(newPlayer)
            }

            for (let i = 0; i < pocetHracov; i++) {
                for (let j = 0; j < 3; j++) {
                    this.poleHracov.push(this.kacky[i])
                }
            }

            for (let j = 0; j < 3; j++) {
                this.poleHracov.push(this.voda)
            }

            this.poleHracov = shuffleArray(this.poleHracov)

            console.log(this.balicek, this.poleHracov, this.hraci)

            for (let i = 0; i < 5; i++) {
                this.rybnik.kacky.push(this.poleHracov[i])
            }
            console.log(this.rybnik.kacky)

            this.hraci[0].karty.forEach(element => {
                this.dataToSend.push(element.nazovKarty)
            });
            this.sendData(this.dataToSend)
        }

        sendData(data) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'game.php', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const responseData = JSON.parse(xhr.responseText);
                    const receivedDataDisplay = document.getElementById('receivedDataDisplay');
                    receivedDataDisplay.textContent = JSON.stringify(responseData);
                } else {
                    console.error('Error receiving data:', xhr.statusText);
                }
            };
            const jsonData = JSON.stringify({ dataToSend: data });

            console.log('data to send:', jsonData)
            xhr.send(jsonData);
        }

        draw(context) {
            this.background.draw(context)
            this.hraci[0].drawK(context, canvas.height, canvas.width)
            this.rybnik.draw(context)
        }
    }



    const game = new Game(canvas.height, canvas.width)
    game.draw(ctx)
})