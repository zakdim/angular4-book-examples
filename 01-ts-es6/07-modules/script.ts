// import {square, cow} from './utils';
// import {square as sqr, cow} from './utils';
// Import everything
// import * as utils from './utils';
import square, {cow} from './utils';

// Compile and watch for change:
// tsc -t ES5 -w utils.ts script.ts
console.log(square(4));
cow();
