import {useState, useEffect} from 'react';

/**
 * Resolve observable stream to value.
 *
 * @param stream - stream to resolve
 * @param initialValue - initial value to be immediately available
 */
export default (stream, initialValue) => {
  const [state, setState] = useState(initialValue);
  useEffect(() => {
    const listener = {
      next: (i) => {
        console.log('[xstream] next >>> ', i);
        setState(i);
      },
      error: (err) => console.error('[xstream] error >>>', err),
      complete: () => console.log('[xstream] completed'),
    };
    // console.log('useStream');

    stream.addListener(listener);
    return () => stream.removeListener(listener);
  }, []);

  return state;
};
