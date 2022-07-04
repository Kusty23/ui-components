import React from "react";

export default function KCanvas(props) {
  const canvasRef = React.useRef(null);

  let canvas;
  let ctx;
  let tiles = [];
  const tileHeight = 40;
  const tileWidth = 40;

  const gridHeight = 10;
  const gridWidth = 10;

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
    for (let col = 0; col < gridWidth; col++) {
      for (let row = 0; row < gridHeight; row++) {
        tiles.push(new Tile(row, col));
      }
    }
  };

  const genGradient = () => {
    // First calculate left-right gradients
    // Top
    let rl = keyColors.topLeft.r;
    let rr = keyColors.topRight.r;
    let delr = (rr - rl) / (gridWidth - 1);

    let gl = keyColors.topLeft.g;
    let gr = keyColors.topRight.g;
    let delg = (gr - gl) / (gridWidth - 1);

    let bl = keyColors.topLeft.b;
    let br = keyColors.topRight.b;
    let delb = (br - bl) / (gridWidth - 1);

    for (let x = 0; x < gridWidth; x++) {
      tiles[x].color.r = rl + delr * x;
      tiles[x].color.g = gl + delg * x;
      tiles[x].color.b = bl + delb * x;
    }

    // Bottom
    rl = keyColors.botLeft.r;
    rr = keyColors.botRight.r;
    delr = (rr - rl) / (gridWidth - 1); //one less than grid size

    gl = keyColors.botLeft.g;
    gr = keyColors.botRight.g;
    delg = (gr - gl) / (gridWidth - 1); //one less than grid size

    bl = keyColors.botLeft.b;
    br = keyColors.botRight.b;
    delb = (br - bl) / (gridWidth - 1); //one less than grid size

    for (let x = 0; x < gridWidth; x++) {
      tiles[tiles.length - gridWidth + x].color.r = rl + delr * x;
      tiles[tiles.length - gridWidth + x].color.g = gl + delg * x;
      tiles[tiles.length - gridWidth + x].color.b = bl + delb * x;
    }

    // Fill in the columns
    for (let col = 0; col < gridHeight; col++) {
      let rt = tiles[col].color.r;
      let rb = tiles[tiles.length - gridWidth + col].color.r;
      delr = (rb - rt) / (gridHeight - 1);

      let gt = tiles[col].color.g;
      let gb = tiles[tiles.length - gridWidth + col].color.g;
      delg = (gb - gt) / (gridHeight - 1);

      let bt = tiles[col].color.b;
      let bb = tiles[tiles.length - gridWidth + col].color.b;
      delb = (bb - bt) / (gridHeight - 1);

      for (let x = 0; x < gridHeight; x++) {
        tiles[x * gridWidth + col].color.r = rt + delr * x;
        tiles[x * gridWidth + col].color.g = gt + delg * x;
        tiles[x * gridWidth + col].color.b = bt + delb * x;
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
        this.index.x * tileWidth,
        this.index.y * tileHeight,
        packRGB(this.color.r, this.color.g, this.color.b)
      );
    }
  }

  return <canvas width="700px" height="500px" ref={canvasRef} {...props} />;
}
