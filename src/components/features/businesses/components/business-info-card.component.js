import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';

const BusinessCard = ({business = {}}) => {
  const [businessData, setBusinessData] = useState();
  const {
    name = 'Pinellas Ale House',
    image = 'https://www.pawbeer.com/wp-content/uploads/Webpage-Header-1024x666.jpg',
    address = '1962 1st Ave S.',
    rating = 3,
  } = business;
  console.log(business);
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  Ionicons.loadFont().then();

  useEffect(() => {
    const userDocument = async () => {
      const getBusiness = await firestore()
        .collection('businesses')
        .doc('businesses')
        .get();
      setBusinessData(getBusiness._data);
    };
    userDocument();
    console.log('hi');
  }, []);

  return (
    <Card
      style={{
        backgroundColor: 'pink',
      }}>
      {businessData && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'baseline', margin: 'auto'}}>
            <Card.Cover
              source={{uri: business.image}}
              style={{minWidth: '90%', borderRadius: 5}}
            />
            <Text style={{fontSize: 25}}>{business.name}</Text>
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
      )}
    </Card>
  );
};

export default BusinessCard;
