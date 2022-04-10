import React, {useState} from 'react';

import {View, Text, Modal, StyleSheet, Pressable} from 'react-native';
import {Card, List} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icon} from 'react-native-material-des';
import BusinessCard from '../components/business-info-card.component';

export const BusinessDetailScreen = ({route}) => {
  const [hoursExpanded, setHoursExpanded] = useState(false);

  const {business} = route.params;
  console.log(business);

  const rating = 4;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  Ionicons.loadFont().then();
  return (
    <View>
      {/* <BusinessCard business={business} /> */}
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
        {/* <Text style={{fontSize: 15}}>{business._data.phone}</Text>
        <Text style={{fontSize: 15}}>{business._data.street}</Text>
        <Text style={{fontSize: 15}}>
          {business._data.city} {business._data.state}, {business._data.zip}
        </Text> */}
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={hoursExpanded}
          onRequestClose={() => {
            setHoursExpanded(!hoursExpanded);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <Text style={styles.modalText}>Hello World!</Text> */}
              <Text>Hours</Text>
              {business._data.hours.map(item => (
                <Text>
                  {item.day} {item.open} - {item.close}
                </Text>
              ))}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setHoursExpanded(!hoursExpanded)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setHoursExpanded(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
