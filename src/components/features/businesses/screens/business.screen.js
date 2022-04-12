import React, {useEffect, useState} from 'react';

import {Text, View, useWindowDimensions} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {StyleSheet} from 'react-native';

import BusinessCard from '../components/business-info-card.component';

export const BusinessScreen = ({navigation}) => {
  const [businessData, setBusinessData] = useState();

  const {width: windowWidth} = useWindowDimensions();

  const cardWidth = windowWidth / 2 - 20;

  const gap = 16;

  const halfGap = gap / 2;

  const cardContent = [1, 2, 3, 4, 5];

  const snapOffsets = cardContent.map((_, index) => {
    return cardWidth * index + halfGap * index;
  });

  useEffect(() => {
    const userDocument = async () => {
      const getBusiness = await firestore().collection('businesses').get();
      setBusinessData(getBusiness.docs);
    };
    userDocument();
    console.log('hi');
  }, []);
  console.log(businessData);

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'black'}}>
        <Text>What</Text>
        <FlatList
          data={businessData}
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
                <BusinessCard business={item._data} />
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
