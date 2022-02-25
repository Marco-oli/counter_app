import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import {ConfigScreen} from './screens/ConfigScreen';
import {CountersScreen} from './screens/CountersScreen';

// Icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        headerStyle: {backgroundColor: '#021C47'},
        headerTintColor: '#fff',
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Counters') {
            return (
              <MaterialCommunityIcon name="counter" size={size} color={color} />
            );
          } else if (route.name === 'Config') {
            return <FeatherIcon name="settings" size={size} color={color} />;
          }
        },
        tabBarStyle:
          Platform.OS === 'ios'
            ? {backgroundColor: '#021C47'}
            : {backgroundColor: '#021C47', paddingBottom: 5},
        tabBarActiveTintColor: '#F89502',
        tabBarInactiveTintColor: '#8E8E93',
      })}>
      <Tab.Screen name="Counters" component={CountersScreen} />
      <Tab.Screen name="Config" component={ConfigScreen} />
    </Tab.Navigator>
  );
};
