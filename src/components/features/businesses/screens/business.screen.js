import React from 'react';

import {SafeAreaView, Text, View, useWindowDimensions} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import {businesses} from '../../../../infrastructure/mock-data/business-mock-data';

import BusinessCard from '../components/business-info-card.component';

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

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={{backgroundColor: 'black'}}>
        <Text>What</Text>
        <FlatList
          data={businesses}
          viewabilityConfig={{itemVisiblePercentThreshold: 190}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BusinessDetailScreen', {business: item})
                }
                style={{
                  width: windowWidth,
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <BusinessCard business={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={windowWidth}
          horizontal={true}
        />
      </View>
      <View>
        <Text>Test</Text>
      </View>
    </View>
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
