import React from 'react';

import {SafeAreaView, Text} from 'react-native';
import {FlatList} from 'react-native';

import BusinessInfoCard from '../components/business-info-card.component';

export const BusinessScreen = ({navigation}) => {
  const businesses = [
    {
      name: 'Pinellas Ale House',
      image:
        'https://www.pawbeer.com/wp-content/uploads/Webpage-Header-1024x666.jpg',
      address: '1962 1st Ave S.',
      rating: 3,
    },
    {
      name: '3 Daughters Brewing',
      image:
        'https://beerconnoisseur.com/sites/default/files/network_members/3_daughters_brewing/1.jpeg',
      address: '222 22nd St.',
      rating: 5,
      website: 'https://3dbrewing.com/',
    },
  ];

  return (
    <SafeAreaView>
      <Text>What</Text>
      <FlatList
        data={businesses}
        renderItem={({item}) => {
          return <BusinessInfoCard business={item} />;
        }}
      />
    </SafeAreaView>
  );
};
