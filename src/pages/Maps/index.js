import React from 'react';
import MapView,{Marker} from 'react-native-maps';
import { View } from 'react-native';
import {styles} from './styles';

export function Maps({route}) {
  
  const locationUser = route.params.infoLocationUser;
  const locationPlans = route.params.plans;
  
  return (
    <View style={styles.container}>
      <MapView  
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          latitude: locationUser.latitude,
          longitude: locationUser.longitude,
        }}
      >
      <Marker
        coordinate={{
          latitude: locationUser.latitude,
          longitude: locationUser.longitude
        }}
        title='Estou bem aqui'
      />
      {locationPlans ? 
        locationPlans.map((item) => (
          <Marker
            coordinate={{
              latitude: item.coords.lat,
              longitude: item.coords.lon
            }}
            pinColor={
              item.type === 'TV' && '#32B768'|| //verde
              item.type === 'LANDLINE' && '#0074D0' ||//azul
              item.type === 'BROADBAND' && 'red' ||
              item.type === 'ADDON' && 'linen'
            }
            title={`Plano de ${item.type}`}
            description={`Valor individual do serviço R$ ${item.price}`}
          />
        ))
      :
        null
      }
    </MapView>
    </View>
  );
}

