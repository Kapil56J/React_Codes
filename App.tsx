import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <BottomTabNavigator />
      </View>
    </NavigationContainer>
  );
}

export default App;
