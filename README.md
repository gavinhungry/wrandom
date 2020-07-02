wrandom
=======
Get a random element from a weighted array.

Installation
------------

    $ npm install wrandom

Usage
-----
```javascript
const wrandom = require('wrandom');
```

```js
let arr = ['foo', 'bar', 'baz'];

// first argument is an array of values
// second argument is an array of relative weights
wrandom(arr, [4, 6, 10]); // same weights as [0.2, 0.3, 0.5]
```

Omitting the second argument returns a random element from the array, assuming
an even weighting:

```js
wrandom(arr); // same weights as [1, 1, 1]
```

License
-------
Released under the terms of the
[MIT license](http://tldrlegal.com/license/mit-license). See **LICENSE**.
