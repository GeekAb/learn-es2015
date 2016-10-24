export function add(x, y) {
  return x + y;
}

export const foo = 1;

/*Importing multiple*/
import {add, foo} from './filename.js';

// Importing single
import add from '.filename.js';

// Exporting from another module
export * from '.filename.js';

// named import/export
export * as math from 'filename.js';
import * as math from 'filename.js';
