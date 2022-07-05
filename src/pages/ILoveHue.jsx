import React, { Component } from "react";

import KSiteContainer from "../components/KSiteContainer";
import KCanvas from "../components/KCanvas";

export default function ILoveHue(props) {
  const canvasRef = React.useRef(null);

  let canvas;
  const canvasOffset = { x: 100, y: 50 };

  let ctx;
  let tiles = [];
  const tileHeight = 70;
  const tileWidth = 70;

  const gridHeight = 7;
  const gridWidth = 7;

  let mouse = { x: -1, y: -1 };
  let dragging = false;
  let selected;

  const keyColors = {
    topLeft: { r: 255, g: 0, b: 140 },
    botLeft: { r: 255, g: 190, b: 100 },
    topRight: { r: 5, g: 45, b: 40 },
    botRight: { r: 60, g: 255, b: 145 },
  };

  const locked = [
    0,
    gridWidth - 1,
    gridHeight * gridWidth - gridWidth,
    gridHeight * gridWidth - 1,
  ];

  const packRGB = (r, g, b) => {
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  const genTiles = () => {
    for (let i = 0; i < gridWidth * gridHeight; i++) {
      let tile = !locked.includes(i) ? new Tile(i) : new Tile(i, true);
      tiles.push(tile);
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

  function shuffleTiles() {
    let newTiles = [];

    for (let i = 0; i < tiles.length; i++) {
      if (locked.includes(i)) {
        newTiles.push(tiles[i]);
        continue;
      }

      let rand = -1;
      while (rand < 0 && !tiles[rand]) {
        let temp = Math.floor(Math.random() * tiles.length);
        if (tiles[temp]) {
          if (!tiles[temp].locked) {
            rand = temp;
          }
        }
      }

      if (true) {
        newTiles.push(tiles[rand]);
        newTiles[i].setIndex(i);
        tiles[rand] = null;
      }
    }

    tiles = newTiles;
  }

  const draw = () => {
    ctx.clearRect(0, 0, 1000, 1000);
    tiles.forEach((tile) => {
      tile.render(ctx);
    });

    if (selected) {
      selected.render(ctx);
    }

    window.requestAnimationFrame(draw);
  };

  React.useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    addMouseListener(canvas);

    genTiles();
    genGradient();

    shuffleTiles();

    window.requestAnimationFrame(draw);
  }, [draw]);

  const indexFromPos = (mouse) => {
    let index = {};
    index.x = Math.floor((mouse.x - canvasOffset.x) / tileWidth);
    index.y = Math.floor((mouse.y - canvasOffset.y) / tileHeight);
    index.index = index.y * gridWidth + index.x;

    return index;
  };

  function isComplete() {
    let val = true;
    tiles.forEach((tile) => {
      if (tile.index.index != tile.initialIndex.index) {
        val = false;
      }
    });
    return val;
  }

  const addMouseListener = (canvas) => {
    mouse = { x: -1, y: -1 };
    dragging = false;

    const mousedown = (e) => {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;

      let prev = selected;

      if (mouse.x > gridWidth * tileWidth + canvasOffset.x - 1) {
        return;
      }

      let index = indexFromPos(mouse).index;
      if (tiles[index].locked) {
        return;
      }
      selected = tiles[index];
      selected.selected = true;

      if (prev) {
        prev.selected = false;

        if (selected) {
          tiles[index] = prev;
          tiles[prev.index.y * gridWidth + prev.index.x] = selected;

          let oldindex = prev.index;
          prev.index = selected.index;
          prev.offset.x = 0;
          prev.offset.y = 0;
          selected.index = oldindex;
          selected.offset.x = 0;
          selected.offset.y = 0;
          selected.selected = false;
          selected = null;

          console.log(isComplete());
        }
      }

      dragging = false;
      window.addEventListener("mousemove", (e) => mousemove(e), false);
      window.addEventListener("mouseup", (e) => mouseup(e), false);
    };

    const mousemove = (e) => {
      var dx = e.offsetX - mouse.x;
      var dy = e.offsetY - mouse.y;

      if (selected) {
        selected.offset.x += dx;
        selected.offset.y += dy;
      }

      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    };

    const mouseup = (e) => {
      window.removeEventListener("mousemove", mousemove, false);
      window.removeEventListener("mouseup", mouseup, false);
    };

    canvas.addEventListener("mousedown", (e) => mousedown(e), false);
  };

  class Tile {
    constructor(index, locked = false) {
      this.index = {
        x: index % gridWidth,
        y: Math.floor(index / gridHeight),
        index: index,
      };
      this.initialIndex = this.index;
      this.color = { r: 0, g: 0, b: 0 };
      this.offset = { x: 0, y: 0 };

      this.locked = locked;
      this.selected = false;
      this.selectedColor = { r: 122, g: 122, b: 122 };
    }

    setIndex(newIndex) {
      this.index = {
        x: newIndex % gridWidth,
        y: Math.floor(newIndex / gridHeight),
        index: newIndex,
      };
      this.offset.x = 0;
      this.offset.y = 0;
    }

    render() {
      ctx.fillStyle = packRGB(this.color.r, this.color.g, this.color.b);
      ctx.beginPath();
      if (selected == this) {
        ctx.fillRect(
          this.index.x * tileWidth - 5 + this.offset.x + canvasOffset.x,
          this.index.y * tileWidth - 5 + this.offset.y + canvasOffset.y,
          tileWidth + 10,
          tileHeight + 10
        );
      } else {
        ctx.fillRect(
          this.index.x * tileWidth + canvasOffset.x,
          this.index.y * tileWidth + canvasOffset.y,
          tileWidth,
          tileHeight
        );
      }
      ctx.fill();
      ctx.closePath();

      if (this.locked) {
        ctx.strokeStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(
          (this.index.x + 0.5) * tileWidth + canvasOffset.x,
          (this.index.y + 0.5) * tileHeight + canvasOffset.y,
          5,
          0,
          2 * Math.PI
        );
        ctx.stroke();
      }
    }
  }

  return (
    <KSiteContainer
      siteName="ILoveHue"
      content={
        <>
          <h1>I Love Hue More</h1>
          <KCanvas canvasref={canvasRef} />
        </>
      }
    ></KSiteContainer>
  );
}
