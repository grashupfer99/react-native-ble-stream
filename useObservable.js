import React, {useState, useEffect} from 'react';

export default (observable) => {
  const [state, setState] = useState();

  useEffect(() => {
    const sub = observable.subscribe(
      (x) => {
        console.log('[rxjs] next ', x);
        setState(x);
      },
      (err) => console.log('[rxjs] err >>> ', err),
      () => console.log('[rxjs] complete '),
    );

    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};
