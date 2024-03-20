class Vrstvy {
    constructor(height, width, image) {
        this.width = width;
        this.height = height;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }

    draw(context) {
        const imageAspectRatio = this.image.width / this.image.height;
        const canvasAspectRatio = context.canvas.width / context.canvas.height;

        let renderWidth;
        let renderHeight;
        let offsetX = 0;
        let offsetY = 0;

        if (imageAspectRatio > canvasAspectRatio) {
            // Image is wider than canvas, crop sides
            renderHeight = context.canvas.height;
            renderWidth = renderHeight * imageAspectRatio;
            offsetX = (renderWidth - context.canvas.width) / 2;
        } else {
            // Image is taller than canvas, crop top and bottom
            renderWidth = context.canvas.width;
            renderHeight = renderWidth / imageAspectRatio;
            offsetY = (renderHeight - context.canvas.height) / 2;
        }

        context.drawImage(this.image, this.x, this.y, context.canvas.width, context.canvas.height);
    }
}

export class Pozadie {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.prvyObrazok = document.getElementById('travnik');
        this.vrstva1 = new Vrstvy(this.height, this.width, this.prvyObrazok);
        this.vrstvy = [this.vrstva1];
    }

    draw(context) {
        this.vrstvy.forEach(vrstva => {
            vrstva.draw(context);
        });
    }
}