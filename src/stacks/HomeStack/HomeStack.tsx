import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {homeRoutes} from '../../Routes';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      {homeRoutes.map((route, index) => (
        <Stack.Screen key={index} {...route} />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
