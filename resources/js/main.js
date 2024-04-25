import { Pozadie } from "./pozadie.js"
import { Hrac } from "./hrac.js"
import { KacaciPochod } from "./karty/kacaciPochod.js";
import { Rybnik } from "./rybnik.js";
import { KacaciTanec } from "./karty/kacaciTanec.js";
import { Unik } from "./karty/unik.js";
import { Vystrelit } from "./karty/vystrelit.js";
import { Zamierit } from "./karty/zamierit.js";
import { ZivyStit } from "./karty/zivyStit.js";
import { Biela } from "./kacky/biela.js";
import { Modra } from "./kacky/modra.js";
import { Zelena } from "./kacky/zelena.js";
import { Voda } from "./kacky/voda.js";
import { InputHandler } from "./inputHandler.js";
import { shuffleArray } from "./functions.js";

const pocetHracov = 3

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
            this.pocetZivotov = 3
            this.dataToSend = []

            this.zamierene = [false, false, false, false, false];

            this.aktualnyHrac = 0

            this.zaciatok()
        }

        zaciatok() {

            this.balicek = Array(10).fill().map(() => [
                new KacaciTanec(0, 0),
                new Unik(0, 0),
                new Vystrelit(0, 0),
                new Zamierit(0, 0),
                new ZivyStit(0, 0),
                new KacaciPochod(0, 0)
            ]).flat();

            this.kacky = [
                new Biela(0, 0),
                new Modra(0, 0),
                new Zelena(0, 0),
            ]

            this.poleHracov = Array(this.pocetZivotov).fill().map(() => [
                new Biela(0, 0),
                new Modra(0, 0),
                new Zelena(0, 0)
            ]).flat()

            for (let j = 0; j < 5; j++) {
                this.poleHracov.push(new Voda(0, 0))
            }

            this.balicek = shuffleArray(this.balicek)

            for (let index = 0; index < pocetHracov; index++) {
                const newPlayer = new Hrac(index, this.pocetZivotov, this.kacky[index]);
                const kartyToAdd = this.balicek.slice(index * 3, index * 3 + 3);
                newPlayer.karty.push(...kartyToAdd);
                this.hraci.push(newPlayer);
            }
            this.balicek.splice(0, pocetHracov * 3);

            this.poleHracov = shuffleArray(this.poleHracov)

            console.log(this.balicek, this.poleHracov, this.hraci)

            this.rybnik.kacky.push(...this.poleHracov.slice(0, 5));
            this.hraci[this.aktualnyHrac].karty.forEach(element => {
                this.dataToSend.push(element.nazovKarty)
            });
            this.sendData(this.dataToSend)
        }

        sendData(data) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'game.php', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
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

        updateRybnik() {
            for (let i = 0; i < this.rybnik.kacky.length; i++) {
                this.rybnik.kacky[i] = this.poleHracov[i];
            }
        }

        updateKarty(karta, hrac){
            this.hraci[hrac].karty[karta].clicked = false
            this.balicek.push(this.hraci[hrac].karty.splice(karta, 1)[0]);
            this.hraci[hrac].karty.push(this.balicek.splice(0, 1)[0])
            console.log(this.balicek)
            if(hrac + 1 == pocetHracov){
                this.aktualnyHrac = 0
            }else{
                ++this.aktualnyHrac
            }
            console.log(this.hraci[hrac].karty)
        }

        draw(context) {
            this.background.draw(context)
            this.hraci[this.aktualnyHrac].drawK(context, canvas.height, canvas.width)
            this.rybnik.draw(context)
        }
    }
    const game = new Game(canvas.height, canvas.width)
    game.draw(ctx)

    canvas.style.display = "block";
})




