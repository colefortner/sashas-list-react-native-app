import React from 'react';
import MapView, {Marker} from 'react-native-maps';

export const BusinessMapScreen = ({route}) => {
  const {businessCoordinates} = route.params;

  console.log(businessCoordinates);

  return (
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: 27.7699047,
        longitude: -82.66293,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        coordinate={{
          latitude: businessCoordinates.lat,
          longitude: businessCoordinates.lng,
        }}
      />
    </MapView>
  );
};
