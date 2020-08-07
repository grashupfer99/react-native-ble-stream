/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import useStream from './useStream';
import adapterStateStream from './adapterStateStream';
import deviceStream from './deviceStream';

const App = () => {
  const adapterState = useStream(adapterStateStream, '');
  const devices = useStream(deviceStream, {});
  // console.log('devices ', devices);
  console.log('adapter state ', adapterState);

  return (
    <SafeAreaView >
      <View>
        <Text>Adapter State: {adapterState}</Text>
        <Text>- - - - - - - - - - - - - - - -</Text>
        <FlatList
          data={Object.values(devices)}
          renderItem={({ item }) => (
            <Button
              color="grey"
              title={item.name || item.id}
              onPress={() => console.log('clicked...')}
            />
          )}
          keyExtractor={device => device.id}
        />
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
