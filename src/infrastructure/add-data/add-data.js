import React from 'react';
import {Text, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const AddData = () => {
  const submitHandler = async e => {
    e.preventDefault();

    firestore()
      .collection('businesses')
      .doc('RedMesaMercado')
      .set({
        name: 'Red Mesa Mercado',
        image:
          'https://redmesamercado.com/wp-content/uploads/2020/03/mercado_home.jpg',
        street: '1100 1st Ave N.',
        city: 'St.Petersburg, FL',
        state: 'FL',
        zip: '33705',
        phone: '(855) 291-2639',
        website: 'redmesamercado.com',
      })
      .then(() => {
        console.log('Business added');
      });
  };

  return (
    <Button
      onPress={submitHandler}
      title="Add Business"
      color="#841584"
      accessibilityLabel="Add a business to the database"
    />
  );
};
