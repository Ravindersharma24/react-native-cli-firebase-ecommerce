import React from 'react'
import { Text } from 'react-native'
import AppNavigator from './src/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './src/screens/Main'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App