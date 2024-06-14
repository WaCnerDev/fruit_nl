import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SingUp from '../screens/SignUp';
import RegisterProduct from '../screens/RegisterProduct';
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'LoginScreen', headerShown: false, }} />
      <Stack.Screen name="SingUp" component={SingUp} options={{ title: 'SingUp', headerShown: false, }} />
      <Stack.Screen name="RegisterProduct" component={RegisterProduct} options={{ title: 'RegisterProduct', headerShown: false, }} />
    </Stack.Navigator>
  );
}
