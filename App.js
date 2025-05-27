import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import EditTask from './src/screens/EditTask';
import NovaTarefa from './src/screens/NovaTarefa';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false
  },
  screens: {
    Home: Home,
    EditTask: EditTask,
    NovaTarefa: NovaTarefa,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}