import assert from 'node:assert/strict';
import { PRODUCTS } from '../app/data/products.ts';
// Destructuring remains ordinary JavaScript; Angular inputs are class initializers.
const { name } = PRODUCTS[0]; const defaults = (value = true) => value;
assert.equal(defaults(undefined), true); assert.equal(defaults(null), null);
const ids = PRODUCTS.map(p => p.id), reversed = [...PRODUCTS].reverse().map(p => p.id);
assert.equal(PRODUCTS.filter(p => p.inStock).length, 2);
console.log({ name, ids, reversed, count: PRODUCTS.length, inStock: 2,
  defaultUndefined: defaults(undefined), explicitNull: defaults(null), booleanFalse: false });
