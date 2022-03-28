import React from 'react';

import {SafeAreaView, Text, View, useWindowDimensions} from 'react-native';
import {FlatList} from 'react-native';
import styled from 'styled-components';
import {StyleSheet} from 'react-native';

import BusinessInfoCard from '../components/business-info-card.component';

const BackgroundView = styled(SafeAreaView)`
  background-color: black;
`;

export const BusinessScreen = ({navigation}) => {
  const {width: windowWidth} = useWindowDimensions();

  const cardWidth = windowWidth / 2 - 20;

  const gap = 16;

  const halfGap = gap / 2;

  const cardContent = [1, 2, 3, 4, 5];

  const snapOffsets = cardContent.map((_, index) => {
    return cardWidth * index + halfGap * index;
  });
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
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={{backgroundColor: 'black'}}>
        {/* <BackgroundView> */}
        <Text>What</Text>
        <FlatList
          data={businesses}
          viewabilityConfig={{itemVisiblePercentThreshold: 190}}
          // snapToOffsets={snapOffsets}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: windowWidth,
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <BusinessInfoCard business={item} />
              </View>
            );
          }}
          // showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={windowWidth}
          horizontal={true}
        />
        {/* </BackgroundView> */}
      </View>
      <View>
        <Text>Test</Text>
      </View>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
