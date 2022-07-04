import React from "react";

export default function KCanvas(props) {
  const canvasRef = React.useRef(null);

  let canvas;
  let ctx;
  let tiles = [];
  const tileHeight = 50;
  const tileWidth = 50;

  const keyColors = {
    topLeft: { r: 255, g: 0, b: 140 },
    botLeft: { r: 255, g: 190, b: 100 },
    topRight: { r: 5, g: 45, b: 40 },
    botRight: { r: 60, g: 255, b: 145 },
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

    let gl = keyColors.topLeft.g;
    let gr = keyColors.topRight.g;
    let delg = (gr - gl) / (5 - 1); //one less than grid size

    let bl = keyColors.topLeft.b;
    let br = keyColors.topRight.b;
    let delb = (br - bl) / (5 - 1); //one less than grid size

    for (let x = 0; x < 5; x++) {
      tiles[x].color.r = rl + delr * x;
      tiles[x].color.g = gl + delg * x;
      tiles[x].color.b = bl + delb * x;
    }

    // Bottom
    rl = keyColors.botLeft.r;
    rr = keyColors.botRight.r;
    delr = (rr - rl) / (5 - 1); //one less than grid size

    gl = keyColors.botLeft.g;
    gr = keyColors.botRight.g;
    delg = (gr - gl) / (5 - 1); //one less than grid size

    bl = keyColors.botLeft.b;
    br = keyColors.botRight.b;
    delb = (br - bl) / (5 - 1); //one less than grid size

    for (let x = 0; x < 5; x++) {
      tiles[20 + x].color.r = rl + delr * x;
      tiles[20 + x].color.g = gl + delg * x;
      tiles[20 + x].color.b = bl + delb * x;
    }

    // Fill in the columns
    for (let col = 0; col < 5; col++) {
      let rt = tiles[col].color.r;
      let rb = tiles[20 + col].color.r;
      delr = (rb - rt) / (5 - 1);

      let gt = tiles[col].color.g;
      let gb = tiles[20 + col].color.g;
      delg = (gb - gt) / (5 - 1);

      let bt = tiles[col].color.b;
      let bb = tiles[20 + col].color.b;
      delb = (bb - bt) / (5 - 1);

      for (let x = 0; x < 5; x++) {
        tiles[x * 5 + col].color.r = rt + delr * x;
        tiles[x * 5 + col].color.g = gt + delg * x;
        tiles[x * 5 + col].color.b = bt + delb * x;
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
