import React from 'react';

import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const BusinessHours = ({route}) => {
  const {businessHours} = route.params;

  console.log(businessHours);

  Ionicons.loadFont().then();
  return (
    <View>
      <Text>Business Hours</Text>
      {businessHours.map(day => (
        <Text>
          {day.day} {day.open} - {day.close}
        </Text>
      ))}
    </View>
  );
};
