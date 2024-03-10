import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Newsview from './src/screens/components/Newsview';
import Search from './src/screens/components/Search';
import Splash from './src/screens/Splash';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />     
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Newsview" component={Newsview} />
       <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
