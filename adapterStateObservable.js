import bleManager from './bleManager';
import {
  bindCallback,
  bindNodeCallback,
  fromEventPattern,
  Observable,
} from 'rxjs';

// export default bindNodeCallback((callback) =>
//   bleManager.onStateChange((state) => callback(null, state), true),
// )();

export default Observable.create((observer) =>
  bleManager.onStateChange((state) => observer.next(state), true),
);
// export default bindNodeCallback(onStateChangeAsNodeCallback)();
