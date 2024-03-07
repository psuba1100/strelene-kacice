export class Rybnik {
  constructor(height, width) {
    this.kacky = [];
    this.height = (3 / 7) * height;
    this.width = (3 / 4) * width;
    this.x = (width - this.width) / 2;
    this.y = (height - this.height) / 5;
    this.borderColor = 'black';
    this.borderWidth = 5;
    this.fillColor = 'lightblue';
    this.zamierene = [];
  }

  draw(context) {
    context.save();

    const rybnikImage = document.getElementById('pozadieVoda');
    context.drawImage(rybnikImage, this.x, this.y, this.width, this.height);

    context.strokeStyle = this.borderColor;
    context.lineWidth = this.borderWidth;
    context.strokeRect(this.x, this.y, this.width, this.height);

    for (let i = 1; i < 5; i++) {
      const lineX = this.x + i * (this.width / 5)
      context.beginPath()
      context.moveTo(lineX, this.y)
      context.lineTo(lineX, this.y + this.height)
      context.stroke()
    }

    const cardWidth = 200;
    const cardHeight = 200;

    this.kacky.forEach((kacka, i) => {
      const startX = this.x + (i + 0.5) * (this.width / 5) - cardWidth / 2;
      const startY = this.y + (this.height - cardHeight) / 2;

      kacka.draw(context, startX, startY);
    });


  }
}