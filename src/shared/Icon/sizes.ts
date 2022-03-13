interface IBaseSizes {
  [n: string]: [number, number];
};

const baseSizes: IBaseSizes = {
  menu: [5, 20],
  shareCircle: [20, 20],
  saveCircle: [20, 20],
  up: [19, 10],
  down: [19, 10],
  comments: [20, 20],
  share: [16, 19],
  hide: [19, 19],
  save: [19, 19],
  complain: [20, 19],
  anonim: [20, 20],
  close: [20, 20],
  stroke: [20, 11],
};

const enum sizes {
  width,
  height,
}

function countSize(type: number, name: string, size: number): number {
  return baseSizes[name][type] * size / 20;
}

export function getWidth(name: string, size: number): number {
  return countSize(sizes.width, name, size);
}

export function getHeight(name: string, size: number): number {
  return countSize(sizes.height, name, size);
}