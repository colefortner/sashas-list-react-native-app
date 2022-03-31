import React from 'react';

import {View, Text} from 'react-native';

import BusinessCard from '../components/business-info-card.component';

export const BusinessDetailScreen = ({route}) => {
  const {business} = route.params;

  return (
    <View>
      <Text style={{color: 'pink'}}>TEST</Text>
      <BusinessCard business={business} />
    </View>
  );
};
