import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BusinessCard from '../../components/features/businesses/components/business-info-card.component';
import {BusinessesNavigator} from './businesses.navigator';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const AnotherScreen = () => {
  return (
    <View>
      <Text>Restuarant Card Test screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Setting Screen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* screenOptions={{cardStyle: {backgroundColor: 'black'}}}> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={BusinessesNavigator} />
        <Tab.Screen name="Another Screen" component={BusinessCard} />
        <Tab.Screen name="Settings" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
