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
