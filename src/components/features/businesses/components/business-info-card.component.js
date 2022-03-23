import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';

const BusinessCard = ({business = {}}) => {
  const {
    name = 'Pinellas Ale House',
    image = 'https://www.pawbeer.com/wp-content/uploads/Webpage-Header-1024x666.jpg',
    address = '1962 1st Ave S.',
  } = business;

  return (
    <Card>
      <Text style={{backgroundColor: 'powderblue'}}>{name}</Text>
      <Card.Cover source={{uri: image}} style={{height: 300}} />
      <Text>{address}</Text>
    </Card>
  );
};

export default BusinessCard;
