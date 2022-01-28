import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Consultation from './src/pages/Consultation/'
import NewConsultation from './src/pages/NewConsultation/'
import Details from './src/pages/Details/'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Consultation">
        <Stack.Screen
          name="Minhas Consultas"
          component={Consultation}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
        <Stack.Screen
          name="NewConsultation"
          component={NewConsultation}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
