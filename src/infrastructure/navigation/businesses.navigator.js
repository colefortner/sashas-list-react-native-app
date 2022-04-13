import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BusinessScreen} from '../../components/features/businesses/screens/business.screen';
import {BusinessDetailScreen} from '../../components/features/businesses/screens/business-detail.screen';
import {BusinessHours} from '../../components/features/businesses/screens/business-hours.screen';
import {BusinessMapScreen} from '../../components/features/businesses/screens/business-map.screen';
const BusinessStack = createNativeStackNavigator();

export const BusinessesNavigator = () => {
  return (
    <BusinessStack.Navigator headerMode="none">
      <BusinessStack.Screen name="BusinessScreen" component={BusinessScreen} />
      <BusinessStack.Screen
        name="BusinessDetailScreen"
        component={BusinessDetailScreen}
      />
      <BusinessStack.Screen name="BusinessHours" component={BusinessHours} />
      <BusinessStack.Screen
        name="BusinessMapScreen"
        component={BusinessMapScreen}
      />
    </BusinessStack.Navigator>
  );
};
