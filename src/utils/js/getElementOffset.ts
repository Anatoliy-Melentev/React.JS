export const getElementOffset = function (target: HTMLElement): [number, number] {
  const body = document.body?.getBoundingClientRect(), el =  target.getBoundingClientRect();

  return [el.top - body.top, el.left - body.left];
};