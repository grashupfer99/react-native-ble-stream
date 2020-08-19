// import adapterStateStream from './adapterStateStream';
// import xsFromCallback from 'xstream-from-callback';
import adapterStateObservable from './adapterStateObservable';
import bleManager from './bleManager';
import {Observable, bindNodeCallback, iif} from 'rxjs';
import {map, filter, mergeAll, scan} from 'rxjs/operators';
// const MAIN_SERVICE_UUID = '67637473-6572-7669-6365-2d696e666f00';

// console.log('adapterStateStream >>> ', adapterStateStream);

export default adapterStateObservable.pipe(
  filter((x) => {
    // console.log('filter >>>> ', x);
    return x === 'PoweredOn';
  }),
  map((_) => {
    return bindNodeCallback(bleManager.startDeviceScan.bind(bleManager))(
      [],
      {},
    );
  }),
  mergeAll(),
  scan((p, v) => ({...p, [v.id]: v}), {}),
);
