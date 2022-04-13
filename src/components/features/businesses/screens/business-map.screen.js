import React from 'react';
import MapView, {Marker} from 'react-native-maps';

export const BusinessMapScreen = ({route}) => {
  const {businessCoordinates} = route.params;

  console.log(businessCoordinates);

  return (
    <MapView
      style={{flex: 1}}
      zoomEnabled={true}
      scrollEnabled={true}
      zoomControlEnabled={true}
      initialRegion={{
        latitude: businessCoordinates.lat,
        longitude: businessCoordinates.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
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
