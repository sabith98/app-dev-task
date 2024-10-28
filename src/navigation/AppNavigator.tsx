// This file defines the navigation structure for the app
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateScreen from '../screens/CreateScreen';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{title: 'Add New Item'}}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{title: 'Items List'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: 'Item Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
