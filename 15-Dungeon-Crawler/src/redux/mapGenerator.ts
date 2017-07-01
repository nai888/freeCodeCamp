import { Tile, MapRow } from './reducers';

type coordinate = {
  x: number, y: number
};

class Rectangle {
  location: coordinate;
  width: number;
  height: number;
  constructor(location: coordinate, width: number, height: number) {
    this.location = location;
    this.width = width;
    this.height = height;
  }
}

class Leaf {
  location: coordinate;
  width: number;
  height: number;
  center: coordinate;
  lChild: Leaf;
  rChild: Leaf;
  room: Rectangle;
  constructor(location: coordinate, width: number, height: number) {
    this.location = location;
    this.width = width;
    this.height = height;
    this.center = { x: (width / 2) + location.x, y: (width / 2) + location.y };
  }
}

export default function mapGenerator() {
  return;
}
