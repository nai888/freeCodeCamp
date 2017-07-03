import { Tile, MapRow } from './reducers';

/*
 * This random map generator was based on the tutorial at
 * https://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
 */

type coordinate = {
  x: number, y: number
};

class Rectangle {
  public location: coordinate;
  public width: number;
  public height: number;
  public x: number;
  public y: number;

  protected constructor(location: coordinate, width: number, height: number) {
    this.location = location;
    this.width = width;
    this.height = height;
    this.x = this.location.x;
    this.y = this.location.y;
  }
}

class Space extends Rectangle {
  public grid: coordinate[][];

  protected constructor(location: coordinate, width: number, height: number) {
    super(location, width, height);
    this.grid = [];
    for (let i = location.y; i < location.y + height; i++) {
      let row: coordinate[] = [];
      for (let j = location.x; j < location.x + width; j++) {
        let coordinate: coordinate = {
          x: j,
          y: i
        };
        row.push(coordinate);
      }
      this.grid.push(row);
    }
  }
}

class Room extends Space {
  public constructor(location: coordinate, width: number, height: number) {
    super(location, width, height);
  }
}

class Hall extends Space {
  public constructor(location: coordinate, width: number, height: number) {
    super(location, width, height);
  }
}

class Leaf extends Rectangle {
  public lChild: Leaf;
  public rChild: Leaf;
  public room: Room;
  public halls: Hall[];
  private minLeafSize: number = 10;

  public constructor(location: coordinate, width: number, height: number) {
    super(location, width, height);
  }

  public split: () => boolean = () => {
    if (this.lChild !== undefined || this.rChild !== undefined) {
      return false; // Leaf has already been split
    } else {
      // Determine the direction of the split
      // If width is >= 25% larger than height, we split vertically
      // If height is >= 25% larger than width, we split horizontally
      // Otherwise, we split randomly
      let splitV: boolean;
      if (this.width / this.height >= 1.25) {
        splitV = false;
      } else if (this.height / this.width >= 1.25) {
        splitV = true;
      } else {
        splitV = Math.random() > 0.5 ? true : false;
      }
      // Determine the maximum size of the children
      let maxChildSize: number = (splitV ? this.height : this.width) - this.minLeafSize;
      if (maxChildSize <= this.minLeafSize) {
        return false; // Leaf is too small to split any farther
      } else {
        // Determine where we will split
        let splitLoc: number = Math.floor(Math.random() * (maxChildSize - this.minLeafSize)) + this.minLeafSize;
        // Create the left and right children based on the location of the split
        if (splitV) {
          this.lChild = new Leaf(
            { x: this.x, y: this.y },
            this.width,
            splitLoc
          );
          this.rChild = new Leaf(
            { x: this.x, y: this.y + splitLoc },
            this.width,
            this.height - splitLoc
          );
          return true;
        } else {
          this.lChild = new Leaf(
            { x: this.x, y: this.y },
            splitLoc,
            this.height
          );
          this.rChild = new Leaf(
            { x: this.x + splitLoc, y: this.y },
            this.width - splitLoc,
            this.height
          );
          return true;
        }
      }
    }
  }

  public createRooms: () => void = () => {
    if (this.lChild !== undefined || this.rChild !== undefined) {
      // This Leaf has been split, so create Rooms in the children
      if (this.lChild !== undefined) {
        this.lChild.createRooms();
      }
      if (this.rChild !== undefined) {
        this.rChild.createRooms();
      }
      if (this.lChild !== undefined && this.rChild !== undefined) {
        this.createHalls(this.lChild.getRoom(), this.rChild.getRoom());
      }
    } else {
      // This Leaf has not been split, so we will create a Room
      // This Room can be as large as the leaf or as small as 4 tiles smaller than the leaf
      let roomWidth: number = Math.floor(Math.random() * (this.width - (this.width - 4))) + (this.width - 4);
      let roomHeight: number = Math.floor(Math.random() * (this.height - (this.height - 4))) + (this.height - 4);
      // Place the Room
      let roomPos: coordinate = {
        x: this.x + Math.floor(Math.random() * (this.width - roomWidth)),
        y: this.y + Math.floor(Math.random() * (this.height - roomHeight))
      };
      this.room = new Room(roomPos, roomWidth, roomHeight);
    }
  }

  public getRoom: () => Room = () => {
    // Iterate through each child Leaf until a Room is found
    if (this.room !== undefined) {
      return this.room;
    } else {
      let lRoom: Room;
      let rRoom: Room;
      lRoom = this.lChild.getRoom();
      rRoom = this.rChild.getRoom();
      if (lRoom !== undefined) {
        return lRoom;
      } else if (rRoom !== undefined) {
        return rRoom;
      } else {
        return Math.random() > 0.5 ? lRoom : rRoom;
      }
    }
  }

  public createHalls: (l: Room, r: Room) => void = (l, r) => {
    // Connect each room with hallways
    this.halls = [];

    let point1: coordinate = {
      x: Math.floor(Math.random() * (l.x + l.width - 2 - l.x + 1)) + (l.x + 1),
      y: Math.floor(Math.random() * (l.y + l.height - 2 - l.y + 1)) + (l.y + 1)
    };
    let point2: coordinate = {
      x: Math.floor(Math.random() * (r.x + r.width - 2 - r.x + 1)) + (r.x + 1),
      y: Math.floor(Math.random() * (r.y + r.height - 2 - r.y + 1)) + (r.y + 1)
    };
    
    let w: number = point2.x - point1.x;
    let h: number = point2.y - point1.y;

    if (w < 0) {
      if (h < 0) {
        if (Math.random() > 0.5) {
          this.halls.push(new Hall({ x: point2.x, y: point1.y }, Math.abs(w) + 1, Math.floor(Math.random() * 4) + 2));
          this.halls.push(new Hall({ x: point2.x, y: point2.y }, Math.floor(Math.random() * 4) + 2, Math.abs(h) + 1));
        } else {
          this.halls.push(new Hall({ x: point2.x, y: point2.y }, Math.abs(w) + 1, Math.floor(Math.random() * 4) + 2));
          this.halls.push(new Hall({ x: point1.x, y: point2.y }, Math.floor(Math.random() * 4) + 2, Math.abs(h) + 1));
        }
      } else if (h > 0) {
        if (Math.random() > 0.5) {
          this.halls.push(new Hall({ x: point2.x, y: point1.y }, Math.abs(w) + 1, Math.floor(Math.random() * 4) + 2));
          this.halls.push(new Hall({ x: point2.x, y: point1.y }, Math.floor(Math.random() * 4) + 2, Math.abs(h) + 1));
        } else {
          this.halls.push(new Hall({ x: point2.x, y: point2.y }, Math.abs(w) + 1, Math.floor(Math.random() * 4) + 2));
          this.halls.push(new Hall({ x: point1.x, y: point1.y }, Math.floor(Math.random() * 4) + 2, Math.abs(h) + 1));
        }
      } else /* if (h === 0) */ {
        this.halls.push(new Hall({ x: point2.x, y: point2.y }, Math.abs(w) + 1, Math.floor(Math.random() * 4) + 2));
      }
    } else if (w > 0) {
      if (h < 0) {
        if (Math.random() > 0.5) {
          this.halls.push(new Hall({ x: point1.x, y: point2.y }, Math.abs(w) + 1, Math.floor(Math.random() * 4) + 2));
          this.halls.push(new Hall({ x: point1.x, y: point2.y }, Math.floor(Math.random() * 4) + 2, Math.abs(h) + 1));
        } else {
          this.halls.push(new Hall({ x: point1.x, y: point1.y }, Math.abs(w) + 1, Math.floor(Math.random() * 4) + 2));
          this.halls.push(new Hall({ x: point2.x, y: point2.y }, Math.floor(Math.random() * 4) + 2, Math.abs(h) + 1));
        }
      } else if (h > 0) {
        if (Math.random() > 0.5) {
          this.halls.push(new Hall({ x: point1.x, y: point1.y }, Math.abs(w) + 1, Math.floor(Math.random() * 4) + 2));
          this.halls.push(new Hall({ x: point2.x, y: point1.y }, Math.floor(Math.random() * 4) + 2, Math.abs(h) + 1));
        } else {
          this.halls.push(new Hall({ x: point1.x, y: point2.y }, Math.abs(w) + 1, Math.floor(Math.random() * 4) + 2));
          this.halls.push(new Hall({ x: point1.x, y: point1.y }, Math.floor(Math.random() * 4) + 2, Math.abs(h) + 1));
        }
      } else /* if (h === 0) */ {
        this.halls.push(new Hall({ x: point1.x, y: point1.y }, Math.abs(w) + 1, Math.floor(Math.random() * 4) + 2));
      }
    } else /* if (w === 0) */ {
      if (h < 0) {
        this.halls.push(new Hall({ x: point2.x, y: point2.y }, Math.floor(Math.random() * 4) + 2, Math.abs(h) + 1));
      } else if (h > 0) {
        this.halls.push(new Hall({ x: point1.x, y: point1.y }, Math.floor(Math.random() * 4) + 2, Math.abs(h) + 1));
      }
    }
  }
}

const mapWidth: number = 72;
const mapHeight: number = 58;

function createLeafs(): Leaf[] {
  const maxLeafSize: number = 20;

  // Store each Leaf in an array
  let _leafs: Leaf[] = [];

  // Create the root Leaf
  let root: Leaf = new Leaf({ x: 0, y: 0 }, mapWidth, mapHeight);
  _leafs.push(root);

  // Loop through every Leaf in _leafs recursively splitting until no more can be split
  let didSplit: boolean = true;
  while (didSplit) {
    didSplit = false;
    for (let i = 0; i < _leafs.length; i++) {
      let l: Leaf = _leafs[i];
      // If this Leaf has not already been split
      if (l.lChild === undefined && l.rChild === undefined) {
        // If this Leaf is too big, or with a 75% chance
        if (l.width > maxLeafSize || l.height > maxLeafSize || Math.random() > 0.25) {
          // Split the leaf
          if (l.split()) {
            // If it successfully split, add to _leafs so we can loop through children
            _leafs.push(l.lChild);
            _leafs.push(l.rChild);
            didSplit = true;
          }
        }
      }
    }
  }

  // Now that all Leafs have been created, create their rooms
  root.createRooms();

  // Return the array of Leafs
  return _leafs;
}

export default function mapGenerator() {
  const leafs: Leaf[] = createLeafs();
  const wallTile: Tile = { tileType: 'wall' };
  const floorTile: Tile = { tileType: 'floor' };
  let map: MapRow[] = [];
  let enemies = 0;
  for (let i = 0; i < mapHeight; i++) { // Map's rows
    let row: Tile[] = [];
    for (let j = 0; j < mapWidth; j++) { // Row's tiles
      let isFloor: boolean = false;
      for (let k = 0; k < leafs.length; k++) { // Leafs
        if (leafs[k].room !== undefined) {
          for (let l = 0; l < leafs[k].room.grid.length; l++) { // Room's rows
            for (let m = 0; m < leafs[k].room.grid[l].length; m++) { // Room's tiles
              let roomTile: coordinate = leafs[k].room.grid[l][m];
              if (roomTile.y === i && roomTile.x === j) { // If coordinates of room match current coordinates of map
                isFloor = true;
              }
            }

          }
        }
        if (leafs[k].halls !== undefined) {
          for (let l = 0; l < leafs[k].halls.length; l++) { // Halls
            for (let m = 0; m < leafs[k].halls[l].grid.length; m++) { // Hall's rows
              for (let n = 0; n < leafs[k].halls[l].grid[m].length; n++) { // Hall's tiles
                let hallTile: coordinate = leafs[k].halls[l].grid[m][n];
                if (hallTile.y === i && hallTile.x === j) { // If coordinates of room match current coordinates of map
                  isFloor = true;
                }
              }
            }
          }
        }
      }
      if (i === 0 || i === mapHeight - 1 || j === 0 || j === mapWidth - 1) { // If coordinate is on the edge of the map
        isFloor = false;
      }
      let tile: Tile = isFloor ? floorTile : wallTile;
      // Place around 16-22 enemies
      if (isFloor && tile.token === undefined && (Math.random() < (25 / (mapWidth * mapHeight)))) {
        tile = { tileType: tile.tileType, token: { tokenType: 'enemy', id: enemies } };
        enemies++;
      }
      // Place around 10-15 health
      if (isFloor && tile.token === undefined && (Math.random() < (18 / (mapWidth * mapHeight)))) {
        tile = { tileType: tile.tileType, token: { tokenType: 'health' } };
      }
      // Place around 5-7 skill powerups
      if (isFloor && tile.token === undefined && (Math.random() < (10 / (mapWidth * mapHeight)))) {
        tile = { tileType: tile.tileType, token: { tokenType: 'skill' } };
      }
      row.push(tile);
    }
    map.push(row);
  }

  let randomTile: coordinate;
  const getRandUsableTile: () => coordinate = () => {
    let unusable = true;
    while (unusable) {
      unusable = false;
      randomTile = {
        x: Math.floor(Math.random() * mapWidth - 2) + 1,
        y: Math.floor(Math.random() * mapHeight - 2) + 1
      }
      if (map[randomTile.y][randomTile.x].tileType !== 'floor') {
        unusable = true;
      }
    }
    return randomTile;
  }
  // Add user
  randomTile = getRandUsableTile();
  const playerTile: Tile = { tileType: 'floor', token: { tokenType: 'player' } };
  map[randomTile.y].splice(randomTile.x, 1, playerTile);
  // Add stairs
  randomTile = getRandUsableTile();
  const stairsTile: Tile = { tileType: 'floor', token: { tokenType: 'stairs' } };
  map[randomTile.y].splice(randomTile.x, 1, stairsTile);
  // If 4th floor, add the boss
  /* if (store.getState().gameState.floor === 4) {
    randomTile = getRandUsableTile();
    const bossTile: Tile = { tileType: 'floor', token: { tokenType: 'boss', id: enemies } };
    map[randomTile.y].splice(randomTile.x, 1, bossTile)
  } */
  return map;
}
