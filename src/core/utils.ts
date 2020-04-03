import slugify from "slugify";

/**
 * @param {Object} element
 * @param {String|Array} path
 * @param {any} fallback
 * @returns {*}
 */
export const get = (element: any, path: any, fallback: any): any => {
  if (element === undefined) {
    return fallback;
  }

  const search = Array.isArray(path)
    ? path
    : path.split(".").filter((pieces: any) => pieces && pieces.length);

  if (!search.length) {
    return element;
  }

  return get(element[search.shift()], search, fallback);
};

export const slug = (text: string, options: object = {}): string => {
  return slugify(text, options).toLowerCase();
};

export const currencyFormat = (num: any, decimals: number = 2) => {
  const numberToFormat = parseFloat(num);

  if (isNaN(numberToFormat)) {
    return "";
  }

  return numberToFormat
    .toFixed(decimals)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export const timestampToDateString = (timestamp: any): string => {
  const dateObject = new Date(timestamp);
  const date = dateObject.getDate();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();

  return `${pad(date)}/${pad(month + 1)}/${year}`;
};

export const pad = (number: number): string => {
  return number < 10 ? `0${number}` : number.toString();
};
