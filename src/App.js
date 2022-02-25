import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './Routes';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

// Contexts
import {CounterContext} from './contexts/CounterContext';
import {StatusBar} from 'react-native';

const App = () => {
  useEffect(() => {
    Ionicons.loadFont();
    MaterialCommunity.loadFont();
    Feather.loadFont();
  }, []);
  return (
    <NavigationContainer>
      <CounterContext>
        <StatusBar barStyle="light-content" backgroundColor="#021C47" />
        <Routes />
      </CounterContext>
    </NavigationContainer>
  );
};

export default App;
