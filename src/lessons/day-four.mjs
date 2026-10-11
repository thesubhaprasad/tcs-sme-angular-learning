import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validateProducts } from '../app/data/validate-products.ts';
// This script practises Promise/await/JSON. HttpClient is used in the live Angular app.
const text = await readFile(new URL('../../public/products.json', import.meta.url), 'utf8');
const data = validateProducts(JSON.parse(text));
assert.equal(data.length, 4); assert.deepEqual(validateProducts([]), []);
assert.throws(() => validateProducts({ products: data }), /array/);
assert.throws(() => validateProducts([data[0], data[0]]), /unique/);
console.log({ count: data.length, first: data[0].name });
// Browser fetch primer: check response.ok, then await response.json(); use an AbortController
// to cancel an obsolete request. The Angular service instead uses HttpClient and unsubscribe.
