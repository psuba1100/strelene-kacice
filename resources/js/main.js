import {Pozadie} from "./pozadie.js"

window.addEventListener("load", function(){
    const fullScreen = document.getElementById('fullScreen')
    const canvas = document.getElementById('hra')
    const ctx = canvas.getContext('2d');

    canvas.height = 1000
    canvas.width = 2048

    class Game {
        constructor(height, width) {
            this.height = height
            this.width = width
            this.background = new Pozadie(this)
        }
        draw(context){
            this.background.draw(context)
        }
    }
})