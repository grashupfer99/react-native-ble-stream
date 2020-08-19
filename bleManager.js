import {BleManager} from 'react-native-ble-plx';
import {Observable, from} from 'rxjs';
import {mergeAll, map} from 'rxjs/operators';
import {Buffer as buffer} from 'buffer';

import xs, {Stream} from 'xstream';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';

// Observable.prototype.flattenConcurrently = function () {
//   return mergeAll(this);
// };

// Observable.prototype.mapPromised = function (f) {
//   return this.map(f)
//     .map((p) => from(p))
//     .flattenConcurrently();
// };

Stream.prototype.flattenConcurrently = function () {
  return flattenConcurrently(this);
};
Stream.prototype.mapPromised = function (f) {
  return this.map(f)
    .map((p) => xs.fromPromise(p))
    .flattenConcurrently();
};
global.Buffer = buffer;

// console.log('global >>> ', {...global});

export default new BleManager();
