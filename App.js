import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import useStream from './useStream';
import useObservable from './useObservable';
import adapterStateStream from './adapterStateStream';
import adapterStateObservable from './adapterStateObservable';
// import deviceStream from './deviceStream';

const App = () => {
  // const adapterState = useObservable(adapterStateStream);
  const adapterStateXstream = useStream(adapterStateStream, '');
  const adapterStateRxJs = useObservable(adapterStateObservable);
  // const adapterStateRxJs = adapterStateObservable;
  // const devices = useStream(deviceStream, {});
  // console.log('devices ', devices);
  console.log('xstream adapter state ', adapterStateXstream);
  console.log('rxjs adapter state ', adapterStateRxJs);

  return (
    <SafeAreaView>
      <View>
        <View style={{padding: 20}}>
          <Text>xstream Adapter State: {adapterStateXstream}</Text>
          <Text>rxjs Adapter State: {adapterStateRxJs}</Text>
          <Text>- - - - - - - - - - - - - - - -</Text>
        </View>
        {/* <FlatList
          data={Object.values(devices)}
          renderItem={({item}) => (
            <Button
              color="grey"
              title={item.name || item.id}
              onPress={() => console.log('clicked...')}
            />
          )}
          keyExtractor={(device) => device.id}
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  collision: {
    fontSize: 100,
    textAlign: 'center',
  },
  button: {
    fontSize: 70,
    width: '100%',
    textAlign: 'center',
  },
  buttonHalf: {
    fontSize: 70,
    width: '50%',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default App;
