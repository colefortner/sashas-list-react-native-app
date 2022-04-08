import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';

const BusinessCard = ({business = {}}) => {
  const [user, setUser] = useState();
  const {
    name = 'Pinellas Ale House',
    image = 'https://www.pawbeer.com/wp-content/uploads/Webpage-Header-1024x666.jpg',
    address = '1962 1st Ave S.',
    rating = 3,
  } = business;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  Ionicons.loadFont().then();

  useEffect(() => {
    const userDocument = async () => {
      const getUser = await firestore()
        .collection('users')
        .doc('iv0dzkWxMHuRVjWEzRZ9')
        .get();
      // console.log(userl);
      setUser(getUser);
    };
    userDocument();
    console.log('hi');
  }, []);

  // console.log(user._data.name);
  return (
    <Card
      style={{
        backgroundColor: 'black',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'baseline', margin: 'auto'}}>
          <Text style={{color: 'white', fontSize: 25}}>{name}</Text>
          <Card.Cover
            source={{uri: image}}
            style={{minWidth: '90%', borderRadius: 10}}
          />
          <Text style={{color: 'white', fontSize: 15}}>{address.street}</Text>
          {/* <FontAwesome5 name={'paw'} /> */}
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
      <Text style={{color: 'white'}}>{user._data.another}</Text>
    </Card>
  );
};

export default BusinessCard;
