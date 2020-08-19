import adapterStateStream from './adapterStateStream';
import xsFromCallback from 'xstream-from-callback';
import bleManager from './bleManager';

const MAIN_SERVICE_UUID = '67637473-6572-7669-6365-2d696e666f00';

console.log('adapterStateStream >>> ', adapterStateStream);

export default adapterStateStream
  .filter((state) => {
    console.log('filter state >>> ', state);
    return state === 'PoweredOn';
  })
  .map((_) =>
    xsFromCallback(bleManager.startDeviceScan.bind(bleManager))([], {}),
  )
  .flattenConcurrently()
  .fold((p, v) => ({...p, [v.id]: v}), {});
