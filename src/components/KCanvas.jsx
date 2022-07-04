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
    botRight: { r: 0, g: 0, b: 0 },
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
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        tiles.push(new Tile(row, col));
      }
    }
  };

  const genGradient = () => {
    gradient[0] = [0, 0, 0, 0, 0];
    gradient[1] = [0, 0, 0, 0, 0];
    gradient[2] = [0, 0, 0, 0, 0];
    gradient[3] = [0, 0, 0, 0, 0];
    gradient[4] = [0, 0, 0, 0, 0];

    // First calculate left-right gradients
    // Top
    let rl = keyColors.topLeft.r;
    let rr = keyColors.topRight.r;

    let delr = (rr - rl) / (5 - 1); //one less than grid size

    let row = [];
    for (let x = 0; x < 5; x++) {
      row.push(rl + delr * x);
      console.log(rl, delr, rl + delr);
    }
    gradient[0] = row;

    // Bottom
    rl = keyColors.botLeft.r;
    rr = keyColors.botRight.r;

    delr = (rr - rl) / (5 - 1); //one less than grid size

    row = [];
    for (let x = 0; x < 5; x++) {
      row.push(rl + delr * x);
    }
    gradient[4] = row;

    // Then calculate top-bottom gradients for each column
    for (let i = 0; i < 5; i++) {
      let rt = gradient[0][i];
      let rb = gradient[4][i];

      delr = (rb - rt) / (5 - 1); //one less than grid size

      for (let y = 0; y < 5; y++) {
        gradient[y][i] = rt + delr * y;
      }
    }

    console.log(gradient);
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
    }

    render() {
      rect(this.index.x * 50, this.index.y * 50, getColorByPos(this.index));
    }
  }

  return <canvas width="700px" height="300px" ref={canvasRef} {...props} />;
}
