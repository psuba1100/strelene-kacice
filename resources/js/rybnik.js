

export class Rybnik {
  constructor(height, width) {
    this.kacky = []

    this.height = (3 / 7) * height;
    this.width = (3 / 4) * width;
    this.x = (width - this.width) / 2;
    this.y = (height - this.height) / 5;
    this.borderColor = 'black';
    this.borderWidth = 5;
    this.fillColor = 'lightblue';
    this.squares = [];
    this.zamierene = []
    this.createSquares();

    this.bigSquareHeight = (3 / 4) * this.height;
  }

  createSquares() {

    const squareCount = 5;
    const spaceBetweenSquares = (this.width - (squareCount * this.height * 3 / 4)) / (squareCount + 1);


    for (let i = 0; i < squareCount; i++) {
      const square = {
        x: i * (this.bigSquareHeight + spaceBetweenSquares) + spaceBetweenSquares + this.x,
        y: this.y + this.borderWidth + this.height * 0.5 / 4,
        width: this.bigSquareHeight,
        height: this.bigSquareHeight,
        borderColor: 'black',
        borderWidth: 3,
        smallSquare: this.createSmallSquare(this.bigSquareHeight),
      };
      this.squares.push(square);
      this.zamierene.push(false)
    }
  }

  createSmallSquare(bigSquareHeight) {
    const smallSquareSize = bigSquareHeight / 3;

    return {
      x: (bigSquareHeight - smallSquareSize) / 2,
      y: -(smallSquareSize / 2),
      size: smallSquareSize,
      borderColor: 'black',
      borderWidth: 3,
      fillColor: 'lightblue',
    };
  }

  draw(context) {
    context.save();

    const rybnikImage = document.getElementById('pozadieVoda');
    context.drawImage(rybnikImage, this.x, this.y, this.width, this.height);

    context.strokeStyle = this.borderColor;
    context.lineWidth = this.borderWidth;
    context.strokeRect(this.x, this.y, this.width, this.height);

    this.squares.forEach((square) => {
      context.strokeStyle = square.borderColor;
      context.lineWidth = square.borderWidth;
      context.strokeRect(square.x, square.y, square.width, square.height);

      const smallSquare = square.smallSquare;
      context.strokeStyle = smallSquare.borderColor;
      context.lineWidth = smallSquare.borderWidth;
      context.fillStyle = smallSquare.fillColor;
      context.fillRect(square.x + smallSquare.x, square.y + smallSquare.y, smallSquare.size, smallSquare.size);
      context.strokeRect(square.x + smallSquare.x, square.y + smallSquare.y, smallSquare.size, smallSquare.size);
    });

    context.restore();
  }

  drawKacky(context) {
    const width = this.bigSquareHeight - 50
    const height = width
    this.squares.forEach((square, i) => {
      const x = square.x / 2
      const y = square.y * (2 / 3)
      this.kacky[i].draw(context, x, y)
      console.log(i);
    })
  }
}