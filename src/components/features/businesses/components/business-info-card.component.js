import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BusinessCard = ({business = {}}) => {
  const {
    name = 'Pinellas Ale House',
    image = 'https://www.pawbeer.com/wp-content/uploads/Webpage-Header-1024x666.jpg',
    address = '1962 1st Ave S.',
    rating = 3,
  } = business;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  Ionicons.loadFont().then();

  return (
    <Card>
      <Text style={{backgroundColor: 'powderblue'}}>{name}</Text>
      <Card.Cover source={{uri: image}} style={{height: 300}} />
      <Text>{address}</Text>
      {/* <FontAwesome5 name={'paw'} /> */}
      <View style={{flexDirection: 'row'}}>
        {ratingArray.map((_, i) => (
          <Ionicons
            name={'paw'}
            style={{color: 'orange', fontSize: 20, padding: 1}}
          />
        ))}
      </View>
    </Card>
  );
};

export default BusinessCard;
