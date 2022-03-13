export const createLinkParams = (params: {[n: string]: string}): string => {
  let url = '';
  if (typeof params === 'object' && Object.keys(params).length > 0) {
    for (let prop in params) {
      url += `&${prop}=${params[prop]}`;
    }
  }

  return url.length ? url.substring(1) : '';
};