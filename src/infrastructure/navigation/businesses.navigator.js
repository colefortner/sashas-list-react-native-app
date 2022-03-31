import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BusinessScreen} from '../../components/features/businesses/screens/business.screen';
import {BusinessDetailScreen} from '../../components/features/businesses/screens/business-detail.screen';

const BusinessStack = createNativeStackNavigator();

export const BusinessesNavigator = () => {
  return (
    <BusinessStack.Navigator headerMode="none">
      <BusinessStack.Screen name="BusinessScreen" component={BusinessScreen} />
      <BusinessStack.Screen
        name="BusinessDetailScreen"
        component={BusinessDetailScreen}
      />
    </BusinessStack.Navigator>
  );
};
