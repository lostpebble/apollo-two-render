/**
 * Created by Paul on 2017-06-19.
 */

export function notNullEmptyArray(array: any[]) {
  return (array != null && Array.isArray(array) && array.length > 0);
}

export function safeIterate<T>(array: T[], iterator: (value: T, index: number, array: T[]) => void) {
  if (notNullEmptyArray(array)) {
    array.forEach(iterator);
  }
}

function safeFmap<T>(array: T[], fmapIterator: (value: T, index: number, array: T[]) => null | any): null | any[] {
  if (notNullEmptyArray(array)) {
    return fmap.call(array, fmapIterator);
  }

  return null;
}

function safeMap<T>(array: T[], mapIterator: (value: T, index: number, array: T[]) => any): null | any[] {
  if (notNullEmptyArray(array)) {
    return array.map(mapIterator);
  }

  return null;
}

export function fmap(callback) {
  return this.reduce((accum, ...args) => {
    const x = callback(...args);

    if (x != null) {
      accum.push(x);
    }

    return accum;
  }, []);
}

export default {
  notNullEmptyArray,
  safeIterate,
  safeFmap,
  safeMap,
};
