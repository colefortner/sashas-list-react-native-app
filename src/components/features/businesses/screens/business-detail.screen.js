import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const BusinessDetailScreen = ({navigation, route}) => {
  const {business} = route.params;
  console.log(business);

  const rating = 4;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  Ionicons.loadFont().then();
  return (
    <View style={{}}>
      <View style={{}}>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            bottom: 25,
            left: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: '800',
            }}>
            {business._data.name}
          </Text>
          <View>
            <View style={{flexDirection: 'row'}}>
              {ratingArray.map((_, i) => (
                <Ionicons
                  name={'paw'}
                  style={{color: 'orange', fontSize: 20, padding: 1}}
                />
              ))}
            </View>
          </View>
        </View>
        <Card.Cover
          source={{uri: business._data.image}}
          style={{minWidth: '100%'}}
        />
        <Text style={{fontSize: 25}}>{business.name}</Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('BusinessHours', {
            businessHours: business._data.hours,
          })
        }
        style={{
          backgroundColor: 'blue',
          width: 45,
        }}>
        <Text style={{color: 'white'}}>Hours</Text>
      </TouchableOpacity>
    </View>
  );
};
