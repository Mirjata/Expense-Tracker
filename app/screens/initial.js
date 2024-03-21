import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './logIn';
import SignUp from './signUp';
import InitialScreen from './initialScreen';
import ForgotPassword from './forgotPassword';

const BaseApp = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="initialScreen">
        <Stack.Screen
          name="initialScreen"
          component={InitialScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="logIn"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseApp;
