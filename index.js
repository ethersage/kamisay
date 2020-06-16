const bucket = require('@ethersage/quantile').bucket;
const quantile = require('@ethersage/quantile').quantile;

console.log(
  bucket(2, [5, 6, 7, 8, 1, 2, 3, 4])); // => [[1, 2, 3, 4], [5, 6, 7, 8]],
  bucket(3, [5, 6, 7, 8, 1, 2, 3, 4])); // => [[1, 2, 3], [4, 5, 6], [7, 8]],
  bucket(3, [5, 6, 5, 3, 1, 2, 3, 4])); // => [[1, 2, 3], [3, 4, 5], [5, 6]],

  quantile(2, [5, 6, 7, 8, 1, 2, 3, 4])); // => [4],
  quantile(3, [5, 6, 7, 8, 1, 2, 3, 4])); // => [3, 6],
  quantile(3, [5, 6, 5, 3, 1, 2, 3, 4])); // => [3, 5],
);
