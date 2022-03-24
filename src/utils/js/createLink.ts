type TParams = {
  [n: string]: string
}

export const createLink = (url: string = '', params: TParams): string => {
  let str = '';
  if (typeof params === 'object' && Object.keys(params).length > 0) {
    for (let prop in params) {
      str += `&${prop}=${params[prop]}`;
    }
  }

  return url + (str.length ? str.substring(1) : str);
};