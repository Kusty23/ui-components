import React from "react";

export default function KCanvas(props) {
  const canvasRef = React.useRef(null);

  let canvas;
  let ctx;
  let tiles = [];
  const tileHeight = 50;
  const tileWidth = 50;

  const keyColors = {
    topLeft: { r: 255, g: 0, b: 0 },
    botLeft: { r: 122, g: 0, b: 0 },
    topRight: { r: 70, g: 0, b: 0 },
    botRight: { r: 0, g: 10, b: 0 },
  };

  let gradient = Array(5);

  const packRGB = (r, g, b) => {
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  const getColorByPos = (index) => {
    let tl = gradient[index.y][index.x];
    return packRGB(tl, 0, 0);
  };

  const rect = (x, y, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(x + 100, y + 20, tileWidth, tileHeight);
    ctx.fill();
    ctx.closePath();
  };

  const genTiles = () => {
    for (let col = 0; col < 5; col++) {
      for (let row = 0; row < 5; row++) {
        tiles.push(new Tile(row, col));
      }
    }
  };

  const genGradient = () => {
    // First calculate left-right gradients
    // Top
    let rl = keyColors.topLeft.r;
    let rr = keyColors.topRight.r;

    let delr = (rr - rl) / (5 - 1); //one less than grid size

    for (let x = 0; x < 5; x++) {
      tiles[x].color.r = rl + delr * x;
    }

    // Bottom
    rl = keyColors.botLeft.r;
    rr = keyColors.botRight.r;

    delr = (rr - rl) / (5 - 1); //one less than grid size

    for (let x = 0; x < 5; x++) {
      tiles[20 + x].color.r = rl + delr * x;
    }

    // 1st col
    for (let col = 0; col < 5; col++) {
      let rt = tiles[col].color.r;
      let rb = tiles[20 + col].color.r;

      delr = (rb - rt) / (5 - 1);

      for (let x = 0; x < 5; x++) {
        tiles[x * 5 + col].color.r = rt + delr * x;
      }
    }
  };

  const draw = () => {
    tiles.forEach((tile) => {
      tile.render(ctx);
    });
  };

  React.useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    genTiles();
    genGradient();
    draw();
  }, [draw]);

  class Tile {
    constructor(x, y) {
      this.index = { x: x, y: y };
      this.color = { r: 0, g: 0, b: 0 };
    }

    render() {
      rect(
        this.index.x * 50,
        this.index.y * 50,
        packRGB(this.color.r, this.color.g, this.color.b)
      );
    }
  }

  return <canvas width="700px" height="300px" ref={canvasRef} {...props} />;
}
