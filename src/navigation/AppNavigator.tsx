import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootStack from './RootStack';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="RootStack" component={RootStack} />
  </Stack.Navigator>
);

export default AppNavigator;
